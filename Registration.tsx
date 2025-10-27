import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Users, Upload, CreditCard, CheckCircle, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface Player {
  name: string;
  dateOfBirth: string;
  position: string;
}

export default function RegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    teamName: '',
    category: '',
    state: '',
    managerName: '',
    managerPhone: '',
    managerEmail: '',
    players: [
      { name: '', dateOfBirth: '', position: '' },
      { name: '', dateOfBirth: '', position: '' },
      { name: '', dateOfBirth: '', position: '' },
      { name: '', dateOfBirth: '', position: '' },
      { name: '', dateOfBirth: '', position: '' },
    ] as Player[],
    eligibilityConfirmed: false,
    teamPhoto: null as File | null,
    playerPhotos: [] as File[],
  });

  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River',
    'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
    'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun',
    'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];

  const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const addPlayer = () => {
    if (formData.players.length < 8) {
      setFormData({
        ...formData,
        players: [...formData.players, { name: '', dateOfBirth: '', position: '' }]
      });
    }
  };

  const removePlayer = (index: number) => {
    if (formData.players.length > 5) {
      const newPlayers = formData.players.filter((_, i) => i !== index);
      setFormData({ ...formData, players: newPlayers });
    }
  };

  const updatePlayer = (index: number, field: keyof Player, value: string) => {
    const newPlayers = [...formData.players];
    newPlayers[index] = { ...newPlayers[index], [field]: value };
    setFormData({ ...formData, players: newPlayers });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (!formData.eligibilityConfirmed) {
      toast.error('Please confirm player eligibility');
      return;
    }
    
    // Generate a unique team ID
    const teamId = `N5F${Date.now().toString().slice(-6)}`;
    
    toast.success(`Registration successful! Your Team ID is: ${teamId}`, {
      duration: 5000,
    });
    
    // Reset form
    setCurrentStep(1);
    setFormData({
      teamName: '',
      category: '',
      state: '',
      managerName: '',
      managerPhone: '',
      managerEmail: '',
      players: Array(5).fill({ name: '', dateOfBirth: '', position: '' }),
      eligibilityConfirmed: false,
      teamPhoto: null,
      playerPhotos: [],
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Team Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="teamName">Team Name *</Label>
                  <Input
                    id="teamName"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    placeholder="Enter your team name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="state">State *</Label>
                  <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {nigerianStates.map((state) => (
                        <SelectItem key={state} value={state.toLowerCase()}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Team Manager Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="managerName">Manager Name *</Label>
                  <Input
                    id="managerName"
                    value={formData.managerName}
                    onChange={(e) => setFormData({ ...formData, managerName: e.target.value })}
                    placeholder="Full name of team manager"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="managerPhone">Phone Number *</Label>
                  <Input
                    id="managerPhone"
                    value={formData.managerPhone}
                    onChange={(e) => setFormData({ ...formData, managerPhone: e.target.value })}
                    placeholder="+234 xxx xxx xxxx"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="managerEmail">Email Address *</Label>
                  <Input
                    id="managerEmail"
                    type="email"
                    value={formData.managerEmail}
                    onChange={(e) => setFormData({ ...formData, managerEmail: e.target.value })}
                    placeholder="manager@email.com"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Player Details</h3>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">{formData.players.length} of 8 players</Badge>
                {formData.players.length < 8 && (
                  <Button onClick={addPlayer} size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Player
                  </Button>
                )}
              </div>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {formData.players.map((player, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium">Player {index + 1} {index < 5 && <span className="text-red-500">*</span>}</h4>
                    {index >= 5 && (
                      <Button
                        onClick={() => removePlayer(index)}
                        size="sm"
                        variant="ghost"
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <Label>Full Name {index < 5 && '*'}</Label>
                      <Input
                        value={player.name}
                        onChange={(e) => updatePlayer(index, 'name', e.target.value)}
                        placeholder="Player full name"
                        required={index < 5}
                      />
                    </div>
                    <div>
                      <Label>Date of Birth {index < 5 && '*'}</Label>
                      <Input
                        type="date"
                        value={player.dateOfBirth}
                        onChange={(e) => updatePlayer(index, 'dateOfBirth', e.target.value)}
                        required={index < 5}
                      />
                    </div>
                    <div>
                      <Label>Position {index < 5 && '*'}</Label>
                      <Select value={player.position} onValueChange={(value) => updatePlayer(index, 'position', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          {positions.map((position) => (
                            <SelectItem key={position} value={position.toLowerCase()}>
                              {position}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Final Steps</h3>
              
              <div className="space-y-6">
                <div>
                  <Label>Team Photo Upload</Label>
                  <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500">
                          <span>Upload team photo</span>
                          <input type="file" className="sr-only" accept="image/*" />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Registration Fee</h4>
                  <p className="text-yellow-700 mb-3">
                    Registration is FREE, but an acceptance fee of ₦5,700 is required to confirm your team's participation.
                  </p>
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pay Acceptance Fee (₦5,700)
                  </Button>
                </div>

                <Separator />

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="eligibility"
                    checked={formData.eligibilityConfirmed}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, eligibilityConfirmed: checked as boolean })
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="eligibility"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Eligibility Confirmation *
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      We confirm all players are amateurs and not registered professionals with the NFF.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Team Registration
          </h1>
          <p className="text-xl text-gray-600">
            Register your team for Naija5Fest 2024
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Step {currentStep} of {totalSteps}</CardTitle>
              <Badge variant="outline">{Math.round(progress)}% Complete</Badge>
            </div>
            <Progress value={progress} className="w-full" />
          </CardHeader>
          <CardContent>
            {renderStep()}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            variant="outline"
          >
            Previous
          </Button>
          
          {currentStep === totalSteps ? (
            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
              <CheckCircle className="mr-2 h-4 w-4" />
              Complete Registration
            </Button>
          ) : (
            <Button onClick={handleNext} className="bg-green-600 hover:bg-green-700">
              Next Step
            </Button>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Need help? Contact us at registration@naija5fest.ng</p>
        </div>
      </div>
    </div>
  );
}