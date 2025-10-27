import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Users, MapPin, Calendar, Star, Play, ArrowRight, Target, Heart, Award } from 'lucide-react';

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'States Participating', value: '37', icon: MapPin },
    { label: 'Teams Expected', value: '2,000+', icon: Users },
    { label: 'Concurrent Tournaments', value: '74', icon: Trophy },
    { label: 'Prize Pool', value: '₦50M+', icon: Award },
  ];

  const features = [
    {
      title: 'Dual-Tier Structure',
      description: 'State qualifiers followed by a grand national finale',
      icon: Target,
    },
    {
      title: 'Grassroots Focus',
      description: 'Celebrating amateur football talent across Nigeria',
      icon: Heart,
    },
    {
      title: 'National Unity',
      description: 'Bringing together all 36 states and FCT',
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🇳🇬 Nigeria&apos;s Premier 5-Aside Football Tournament
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Naija5Fest</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-green-100 mt-2">
                National 5-Aside Football Championship
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Where grassroots football meets national pride. 37 states, 74 tournaments, one champion.
            </p>

            {/* Countdown Timer */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-4 text-green-100">Tournament Starts In:</h3>
              <div className="flex justify-center space-x-4 sm:space-x-8">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                      <div className="text-2xl sm:text-3xl font-bold">{value.toString().padStart(2, '0')}</div>
                      <div className="text-sm text-green-100 capitalize">{unit}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50 text-lg px-8 py-6">
                <Link to="/register">
                  <Trophy className="mr-2 h-5 w-5" />
                  Register Your Team
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <Link to="/tournament">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Tournament Video
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-green-100">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Naija5Fest?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just a tournament - it&apos;s a celebration of Nigerian football culture and unity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Latest Updates
              </h2>
              <p className="text-xl text-gray-600">
                Stay informed with the latest tournament news and announcements
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/contact">
                View All Updates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Registration Opens for All States",
                date: "2 days ago",
                excerpt: "Team registration is now live for all 37 participating states. Early bird registration ends in 30 days.",
                category: "Registration"
              },
              {
                title: "Sponsorship Packages Announced",
                date: "1 week ago", 
                excerpt: "Comprehensive sponsorship opportunities now available for corporate partners looking to support grassroots football.",
                category: "Sponsors"
              },
              {
                title: "Tournament Format Revealed",
                date: "2 weeks ago",
                excerpt: "Detailed breakdown of the dual-tier tournament structure with state qualifiers and national finale.",
                category: "Tournament"
              }
            ].map((update, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{update.category}</Badge>
                    <span className="text-sm text-gray-500">{update.date}</span>
                  </div>
                  <CardTitle className="text-lg">{update.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{update.excerpt}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Make History?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of teams competing for glory in Nigeria&apos;s biggest 5-aside football tournament
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Link to="/register">
                Register Your Team Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/sponsors">
                Become a Sponsor
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}