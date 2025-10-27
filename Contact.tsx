import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Users, Trophy, Building2 } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['info@naija5fest.ng', 'support@naija5fest.ng'],
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+234 800 NAIJA5F', '+234 800 624-5235'],
      description: 'Call us during business hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Naija5Fest Headquarters', 'Lagos, Nigeria'],
      description: 'Visit our main office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      description: 'When we\'re available'
    }
  ];

  const stateCoordinators = [
    { state: 'Lagos', name: 'Adebayo Johnson', phone: '+234 801 234 5678', email: 'lagos@naija5fest.ng' },
    { state: 'Kano', name: 'Ibrahim Musa', phone: '+234 802 345 6789', email: 'kano@naija5fest.ng' },
    { state: 'Rivers', name: 'Emeka Okafor', phone: '+234 803 456 7890', email: 'rivers@naija5fest.ng' },
    { state: 'FCT', name: 'Mohammed Ali', phone: '+234 804 567 8901', email: 'fct@naija5fest.ng' },
    { state: 'Oyo', name: 'Folake Adeyemi', phone: '+234 805 678 9012', email: 'oyo@naija5fest.ng' },
    { state: 'Anambra', name: 'Chioma Okwu', phone: '+234 806 789 0123', email: 'anambra@naija5fest.ng' }
  ];

  const departments = [
    {
      icon: Trophy,
      title: 'Tournament Operations',
      email: 'operations@naija5fest.ng',
      description: 'Match schedules, rules, and tournament queries'
    },
    {
      icon: Users,
      title: 'Team Registration',
      email: 'registration@naija5fest.ng',
      description: 'Registration issues and team management'
    },
    {
      icon: Building2,
      title: 'Partnerships',
      email: 'partnerships@naija5fest.ng',
      description: 'Sponsorship and partnership opportunities'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    
    // Reset form
    setContactData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Get in touch with our team for any questions, support, or partnership inquiries.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={contactData.category} onValueChange={(value) => setContactData({ ...contactData, category: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="registration">Team Registration</SelectItem>
                        <SelectItem value="tournament">Tournament Information</SelectItem>
                        <SelectItem value="sponsorship">Sponsorship</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                      placeholder="Brief subject of your message"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* General Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="text-xs text-gray-500">{info.description}</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-gray-700">{detail}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Department Contacts */}
            <Card>
              <CardHeader>
                <CardTitle>Department Contacts</CardTitle>
                <CardDescription>
                  Reach out to specific departments for faster assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {departments.map((dept, index) => {
                  const Icon = dept.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{dept.title}</h4>
                        <p className="text-sm text-gray-600 mb-1">{dept.description}</p>
                        <p className="text-sm text-green-600 font-medium">{dept.email}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* State Coordinators */}
            <Card>
              <CardHeader>
                <CardTitle>State Coordinators</CardTitle>
                <CardDescription>
                  Contact your state coordinator for local tournament information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {stateCoordinators.map((coordinator, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{coordinator.state}</h4>
                        <p className="text-sm text-gray-600">{coordinator.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-600">{coordinator.phone}</p>
                        <p className="text-xs text-gray-500">{coordinator.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm">
                    View All State Coordinators
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'How do I register my team?',
                answer: 'Visit our registration page and complete the multi-step form with your team details, player information, and pay the acceptance fee.'
              },
              {
                question: 'What is the registration fee?',
                answer: 'Registration is FREE, but there\'s an acceptance fee of ₦5,700 required to confirm your team\'s participation.'
              },
              {
                question: 'When does the tournament start?',
                answer: 'State qualifiers begin in January 2025, with the Grand Finale scheduled for March 2025 in Lagos.'
              },
              {
                question: 'Can professional players participate?',
                answer: 'No, this tournament is exclusively for amateur players who are not registered professionals with the NFF.'
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}