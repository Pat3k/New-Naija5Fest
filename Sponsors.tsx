import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Building2, Users, Trophy, Target, BarChart3, Globe, Mail, Phone, MapPin, CheckCircle, Star } from 'lucide-react';
import { toast } from 'sonner';

export default function SponsorsPage() {
  const [inquiryData, setInquiryData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    packageInterest: '',
    message: ''
  });

  const sponsorshipPackages = [
    {
      title: 'State Sponsor',
      price: '₦2,000,000',
      description: 'Sponsor a specific state tournament',
      features: [
        'Exclusive branding for one state tournament',
        'Logo on all state-specific materials',
        'VIP access to state finals',
        'Social media promotion',
        'Team jersey branding rights',
        'Access to sponsor dashboard'
      ],
      popular: false
    },
    {
      title: 'Regional Sponsor',
      price: '₦5,000,000',
      description: 'Sponsor multiple states in a region',
      features: [
        'Branding across 6-8 state tournaments',
        'Regional tournament naming rights',
        'Premium stadium advertising',
        'Live stream logo placement',
        'Merchandise partnership opportunities',
        'Regional media coverage',
        'VIP hospitality packages'
      ],
      popular: true
    },
    {
      title: 'National Partner',
      price: '₦15,000,000',
      description: 'Official tournament partner',
      features: [
        'Tournament title sponsorship',
        'Branding across all 74 tournaments',
        'Prime TV commercial slots',
        'Grand finale naming rights',
        'Exclusive category partnership',
        'Year-round brand association',
        'Custom activation opportunities',
        'Executive networking events'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Massive Reach',
      description: 'Connect with over 2 million football fans across Nigeria'
    },
    {
      icon: Target,
      title: 'Targeted Audience',
      description: 'Engage with passionate, community-focused demographics'
    },
    {
      icon: Trophy,
      title: 'Brand Association',
      description: 'Align your brand with excellence, unity, and sportsmanship'
    },
    {
      icon: BarChart3,
      title: 'Measurable ROI',
      description: 'Track engagement through our comprehensive analytics dashboard'
    },
    {
      icon: Globe,
      title: 'National Coverage',
      description: 'Gain exposure across all 36 states and FCT'
    },
    {
      icon: Star,
      title: 'Premium Content',
      description: 'Access to exclusive content and behind-the-scenes footage'
    }
  ];

  const currentSponsors = [
    { name: 'MTN Nigeria', category: 'Telecommunications', level: 'National Partner' },
    { name: 'Dangote Group', category: 'Conglomerate', level: 'Regional Sponsor' },
    { name: 'First Bank', category: 'Banking', level: 'Regional Sponsor' },
    { name: 'Coca-Cola Nigeria', category: 'Beverages', level: 'State Sponsor' },
    { name: 'Indomie', category: 'Food & Beverages', level: 'State Sponsor' }
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your interest! Our partnerships team will contact you within 24 hours.');
    
    // Reset form
    setInquiryData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      packageInterest: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Partnership Opportunities
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Become a Sponsor
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Partner with Nigeria's premier grassroots football tournament and connect with millions of passionate fans across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with Naija5Fest?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a movement that celebrates unity, excellence, and the beautiful game while reaching your target audience effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sponsorship Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the partnership level that best fits your brand objectives and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sponsorshipPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-green-500 border-2' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-green-600 my-4">{pkg.price}</div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Proud Partners
            </h2>
            <p className="text-xl text-gray-600">
              Join these leading brands in supporting grassroots football development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSponsors.map((sponsor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-green-600" />
                    </div>
                    <Badge variant="outline">{sponsor.level}</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{sponsor.name}</h3>
                  <p className="text-gray-600 text-sm">{sponsor.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-600">
              Get in touch with our partnerships team to discuss custom sponsorship opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Partnership Inquiry</CardTitle>
                <CardDescription>
                  Fill out this form and our team will contact you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={inquiryData.companyName}
                      onChange={(e) => setInquiryData({ ...inquiryData, companyName: e.target.value })}
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactName">Contact Person *</Label>
                    <Input
                      id="contactName"
                      value={inquiryData.contactName}
                      onChange={(e) => setInquiryData({ ...inquiryData, contactName: e.target.value })}
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
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                        placeholder="your@company.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={inquiryData.phone}
                        onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                        placeholder="+234 xxx xxx xxxx"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="packageInterest">Package Interest</Label>
                    <Select value={inquiryData.packageInterest} onValueChange={(value) => setInquiryData({ ...inquiryData, packageInterest: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="state">State Sponsor</SelectItem>
                        <SelectItem value="regional">Regional Sponsor</SelectItem>
                        <SelectItem value="national">National Partner</SelectItem>
                        <SelectItem value="custom">Custom Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                      placeholder="Tell us about your partnership goals and any specific requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-600">partnerships@naija5fest.ng</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-gray-600">+234 800 SPONSOR</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-gray-600">Lagos, Nigeria</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Partnership Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Dedicated account management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Real-time analytics dashboard</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Custom activation opportunities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Year-round brand association</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Exclusive networking events</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}