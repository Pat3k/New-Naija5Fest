import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, MapPin, Users, Trophy, Filter, Star, Award, Calendar, Phone } from 'lucide-react';

interface Team {
  id: string;
  name: string;
  state: string;
  category: 'male' | 'female';
  manager: string;
  coach: string;
  captain: string;
  playersCount: number;
  registrationDate: string;
  status: 'registered' | 'qualified' | 'eliminated' | 'champion';
  logo?: string;
  founded: string;
  achievements: string[];
  contact: {
    phone: string;
    email: string;
  };
  stats: {
    matchesPlayed: number;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
  };
}

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River',
    'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
    'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun',
    'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];

  // Comprehensive teams data
  const teams: Team[] = [
    {
      id: '1',
      name: 'Lagos Lions FC',
      state: 'Lagos',
      category: 'male',
      manager: 'Adebayo Johnson',
      coach: 'Samuel Okocha',
      captain: 'Emeka Okafor',
      playersCount: 8,
      registrationDate: '2024-10-15',
      status: 'qualified',
      founded: '2019',
      achievements: ['Lagos State Champions 2023', 'Southwest Regional Winners 2022'],
      contact: {
        phone: '+234-801-234-5678',
        email: 'info@lagoslionsfc.ng'
      },
      stats: {
        matchesPlayed: 6,
        wins: 4,
        draws: 1,
        losses: 1,
        goalsFor: 15,
        goalsAgainst: 8
      }
    },
    {
      id: '2',
      name: 'Lagos Queens FC',
      state: 'Lagos',
      category: 'female',
      manager: 'Funmi Adebayo',
      coach: 'Grace Okoro',
      captain: 'Chioma Nwankwo',
      playersCount: 7,
      registrationDate: '2024-10-16',
      status: 'qualified',
      founded: '2020',
      achievements: ['Lagos Women&apos;s Cup Winners 2023', 'Fair Play Award 2022'],
      contact: {
        phone: '+234-802-345-6789',
        email: 'contact@lagosqueensfc.ng'
      },
      stats: {
        matchesPlayed: 5,
        wins: 4,
        draws: 0,
        losses: 1,
        goalsFor: 12,
        goalsAgainst: 5
      }
    },
    {
      id: '3',
      name: 'Kano Pillars United',
      state: 'Kano',
      category: 'male',
      manager: 'Ibrahim Musa',
      coach: 'Aliyu Abdullahi',
      captain: 'Suleiman Garba',
      playersCount: 8,
      registrationDate: '2024-10-12',
      status: 'champion',
      founded: '2018',
      achievements: ['Northern Champions 2023', 'Kano State Cup Winners 2022', 'Best Defense Award 2023'],
      contact: {
        phone: '+234-803-456-7890',
        email: 'team@kanopillars.ng'
      },
      stats: {
        matchesPlayed: 7,
        wins: 6,
        draws: 1,
        losses: 0,
        goalsFor: 18,
        goalsAgainst: 4
      }
    },
    {
      id: '4',
      name: 'Rivers United FC',
      state: 'Rivers',
      category: 'male',
      manager: 'Emeka Okafor',
      coach: 'Victor Ikpeba',
      captain: 'Blessing Okoro',
      playersCount: 8,
      registrationDate: '2024-10-18',
      status: 'qualified',
      founded: '2017',
      achievements: ['South-South Champions 2022', 'Rivers State Cup Winners 2023'],
      contact: {
        phone: '+234-804-567-8901',
        email: 'info@riversunitedfc.ng'
      },
      stats: {
        matchesPlayed: 5,
        wins: 3,
        draws: 2,
        losses: 0,
        goalsFor: 11,
        goalsAgainst: 6
      }
    },
    {
      id: '5',
      name: 'Anambra Angels FC',
      state: 'Anambra',
      category: 'female',
      manager: 'Chioma Okwu',
      coach: 'Ngozi Okafor',
      captain: 'Adaora Nwachukwu',
      playersCount: 7,
      registrationDate: '2024-10-14',
      status: 'eliminated',
      founded: '2021',
      achievements: ['Southeast Women&apos;s League Runners-up 2023'],
      contact: {
        phone: '+234-805-678-9012',
        email: 'contact@anambraangels.ng'
      },
      stats: {
        matchesPlayed: 4,
        wins: 1,
        draws: 1,
        losses: 2,
        goalsFor: 6,
        goalsAgainst: 8
      }
    },
    {
      id: '6',
      name: 'FCT Eagles FC',
      state: 'FCT',
      category: 'male',
      manager: 'Mohammed Ali',
      coach: 'Austin Eguavoen',
      captain: 'Ahmed Musa',
      playersCount: 8,
      registrationDate: '2024-10-13',
      status: 'qualified',
      founded: '2019',
      achievements: ['FCT Championship 2023', 'Youth Development Award 2022'],
      contact: {
        phone: '+234-806-789-0123',
        email: 'team@fcteagles.ng'
      },
      stats: {
        matchesPlayed: 6,
        wins: 4,
        draws: 0,
        losses: 2,
        goalsFor: 14,
        goalsAgainst: 10
      }
    },
    {
      id: '7',
      name: 'Oyo Amazons FC',
      state: 'Oyo',
      category: 'female',
      manager: 'Folake Adeyemi',
      coach: 'Mercy Akide',
      captain: 'Rasheedat Ibrahim',
      playersCount: 8,
      registrationDate: '2024-10-17',
      status: 'qualified',
      founded: '2020',
      achievements: ['Oyo State Women&apos;s Cup 2023', 'Most Goals Scored Award 2022'],
      contact: {
        phone: '+234-807-890-1234',
        email: 'info@oyoamazons.ng'
      },
      stats: {
        matchesPlayed: 5,
        wins: 3,
        draws: 1,
        losses: 1,
        goalsFor: 13,
        goalsAgainst: 7
      }
    },
    {
      id: '8',
      name: 'Plateau Panthers FC',
      state: 'Plateau',
      category: 'male',
      manager: 'Daniel Chukwu',
      coach: 'Finidi George',
      captain: 'Yakubu Aiyegbeni',
      playersCount: 7,
      registrationDate: '2024-10-19',
      status: 'registered',
      founded: '2022',
      achievements: ['Plateau State Newcomer Award 2023'],
      contact: {
        phone: '+234-808-901-2345',
        email: 'contact@plateaupanthers.ng'
      },
      stats: {
        matchesPlayed: 3,
        wins: 1,
        draws: 1,
        losses: 1,
        goalsFor: 4,
        goalsAgainst: 5
      }
    },
    {
      id: '9',
      name: 'Delta Force FC',
      state: 'Delta',
      category: 'male',
      manager: 'Peter Odemwingie',
      coach: 'Stephen Keshi Jr.',
      captain: 'John Mikel Obi',
      playersCount: 8,
      registrationDate: '2024-10-11',
      status: 'qualified',
      founded: '2018',
      achievements: ['Delta State Champions 2022', 'South-South Runners-up 2023'],
      contact: {
        phone: '+234-809-012-3456',
        email: 'team@deltaforce.ng'
      },
      stats: {
        matchesPlayed: 6,
        wins: 4,
        draws: 1,
        losses: 1,
        goalsFor: 16,
        goalsAgainst: 9
      }
    },
    {
      id: '10',
      name: 'Kaduna Warriors FC',
      state: 'Kaduna',
      category: 'male',
      manager: 'Garba Lawal',
      coach: 'Samson Siasia',
      captain: 'Chinedu Obasi',
      playersCount: 8,
      registrationDate: '2024-10-20',
      status: 'qualified',
      founded: '2017',
      achievements: ['Northern Zone Champions 2022', 'Kaduna State Cup 2023'],
      contact: {
        phone: '+234-810-123-4567',
        email: 'info@kadunawarriors.ng'
      },
      stats: {
        matchesPlayed: 5,
        wins: 3,
        draws: 2,
        losses: 0,
        goalsFor: 12,
        goalsAgainst: 6
      }
    },
    {
      id: '11',
      name: 'Cross River Angels',
      state: 'Cross River',
      category: 'female',
      manager: 'Blessing Edoho',
      coach: 'Florence Omagbemi',
      captain: 'Rita Nwadike',
      playersCount: 7,
      registrationDate: '2024-10-16',
      status: 'registered',
      founded: '2021',
      achievements: ['Cross River Women&apos;s League 2023'],
      contact: {
        phone: '+234-811-234-5678',
        email: 'contact@crossriverangels.ng'
      },
      stats: {
        matchesPlayed: 4,
        wins: 2,
        draws: 1,
        losses: 1,
        goalsFor: 8,
        goalsAgainst: 6
      }
    },
    {
      id: '12',
      name: 'Bauchi Stars FC',
      state: 'Bauchi',
      category: 'male',
      manager: 'Tijani Babangida',
      coach: 'Mutiu Adepoju',
      captain: 'Rabiu Ibrahim',
      playersCount: 8,
      registrationDate: '2024-10-15',
      status: 'registered',
      founded: '2020',
      achievements: ['Bauchi State Championship 2023'],
      contact: {
        phone: '+234-812-345-6789',
        email: 'team@bauchistars.ng'
      },
      stats: {
        matchesPlayed: 4,
        wins: 2,
        draws: 0,
        losses: 2,
        goalsFor: 7,
        goalsAgainst: 8
      }
    }
  ];

  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         team.manager.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         team.coach.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         team.captain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = !selectedState || team.state === selectedState;
    const matchesCategory = !selectedCategory || team.category === selectedCategory;
    const matchesStatus = !selectedStatus || team.status === selectedStatus;
    
    return matchesSearch && matchesState && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'champion':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'qualified':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'registered':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'eliminated':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'champion':
        return 'Champion';
      case 'qualified':
        return 'Qualified';
      case 'registered':
        return 'Registered';
      case 'eliminated':
        return 'Eliminated';
      default:
        return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'champion':
        return <Trophy className="h-4 w-4" />;
      case 'qualified':
        return <Star className="h-4 w-4" />;
      case 'registered':
        return <Users className="h-4 w-4" />;
      case 'eliminated':
        return null;
      default:
        return null;
    }
  };

  const stats = [
    { label: 'Total Teams', value: teams.length.toString(), color: 'text-blue-600' },
    { label: 'Champions', value: teams.filter(t => t.status === 'champion').length.toString(), color: 'text-yellow-600' },
    { label: 'Qualified Teams', value: teams.filter(t => t.status === 'qualified').length.toString(), color: 'text-green-600' },
    { label: 'Male Teams', value: teams.filter(t => t.category === 'male').length.toString(), color: 'text-purple-600' },
    { label: 'Female Teams', value: teams.filter(t => t.category === 'female').length.toString(), color: 'text-pink-600' },
  ];

  const calculatePoints = (stats: Team['stats']) => {
    return (stats.wins * 3) + (stats.draws * 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Registered Teams
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Meet the teams competing in Naija5Fest from all across Nigeria
            </p>
            <div className="mt-6 text-sm text-green-200">
              From grassroots clubs to established academies - representing the best of Nigerian football
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search teams, managers, coaches..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All States" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All States</SelectItem>
                  {nigerianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Status</SelectItem>
                  <SelectItem value="champion">Champions</SelectItem>
                  <SelectItem value="qualified">Qualified</SelectItem>
                  <SelectItem value="registered">Registered</SelectItem>
                  <SelectItem value="eliminated">Eliminated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTeams.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeams.map((team) => (
                <Card key={team.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <Badge className={`${getStatusColor(team.status)} border flex items-center space-x-1`}>
                        {getStatusIcon(team.status)}
                        <span>{getStatusText(team.status)}</span>
                      </Badge>
                      <Badge variant="outline" className="capitalize">
                        {team.category}
                      </Badge>
                    </div>
                    
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={team.logo} alt={team.name} />
                      <AvatarFallback className="bg-green-100 text-green-700 text-xl font-bold">
                        {team.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <CardTitle className="text-xl">{team.name}</CardTitle>
                    <CardDescription className="flex items-center justify-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{team.state} State</span>
                    </CardDescription>
                    <div className="text-xs text-gray-500 mt-1">
                      Founded {team.founded}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Team Officials */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Manager:</span>
                          <span className="font-medium">{team.manager}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Coach:</span>
                          <span className="font-medium">{team.coach}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Captain:</span>
                          <span className="font-medium">{team.captain}</span>
                        </div>
                      </div>

                      {/* Team Stats */}
                      <div className="border-t pt-3">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Season Stats</h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="font-bold text-lg text-green-600">{calculatePoints(team.stats)}</div>
                            <div className="text-gray-600">Points</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="font-bold text-lg text-blue-600">{team.stats.matchesPlayed}</div>
                            <div className="text-gray-600">Matches</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="font-bold text-lg text-yellow-600">{team.stats.goalsFor}</div>
                            <div className="text-gray-600">Goals For</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="font-bold text-lg text-red-600">{team.stats.goalsAgainst}</div>
                            <div className="text-gray-600">Goals Against</div>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      {team.achievements.length > 0 && (
                        <div className="border-t pt-3">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <Award className="h-4 w-4 mr-1" />
                            Recent Achievements
                          </h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {team.achievements.slice(0, 2).map((achievement, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Contact & Actions */}
                      <div className="border-t pt-3 space-y-2">
                        <div className="flex items-center text-xs text-gray-600">
                          <Phone className="h-3 w-3 mr-1" />
                          <span>{team.contact.phone}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-600">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>Registered: {new Date(team.registrationDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4" variant="outline" size="sm">
                        View Full Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Teams Found</h3>
                <p className="text-gray-600 mb-4">
                  No teams match your current search and filter criteria.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedState('');
                    setSelectedCategory('');
                    setSelectedStatus('');
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Champions Spotlight */}
      {teams.filter(t => t.status === 'champion').length > 0 && (
        <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center">
              <Trophy className="h-10 w-10 mr-3" />
              Current Champions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {teams.filter(t => t.status === 'champion').map((champion) => (
                <Card key={champion.id} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader className="text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-4 border-4 border-white/30">
                      <AvatarFallback className="bg-yellow-500 text-white text-lg font-bold">
                        {champion.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{champion.name}</CardTitle>
                    <CardDescription className="text-white/80">{champion.state} State Champions</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-sm space-y-1">
                      <div>Coach: {champion.coach}</div>
                      <div>Captain: {champion.captain}</div>
                      <div className="font-semibold mt-2">{calculatePoints(champion.stats)} Points • {champion.stats.wins} Wins</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join the Competition
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Don&apos;t miss out! Register your team today and be part of Nigeria&apos;s biggest 5-aside tournament.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Trophy className="mr-2 h-5 w-5" />
              Register Your Team
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Download Team Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}