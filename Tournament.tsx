import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Trophy, Target, Users, MapPin, Calendar, Award, Heart, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TournamentPage() {
  const coreValues = [
    {
      title: 'Unity',
      description: 'Bringing together all 36 states and FCT under one football umbrella',
      icon: Heart,
    },
    {
      title: 'Excellence',
      description: 'Promoting the highest standards of amateur football competition',
      icon: Star,
    },
    {
      title: 'Grassroots Development',
      description: 'Nurturing talent from the community level to national recognition',
      icon: Users,
    },
    {
      title: 'Fair Play',
      description: 'Upholding integrity, respect, and sportsmanship in every match',
      icon: Trophy,
    },
  ];

  const tournamentStructure = [
    {
      phase: 'State Qualifiers',
      description: 'Local tournaments in all 37 participating states',
      duration: '8 weeks',
      teams: '2,000+ teams',
      format: 'Knockout rounds in each state',
    },
    {
      phase: 'Regional Semi-Finals',
      description: 'State winners compete in regional clusters',
      duration: '2 weeks',
      teams: '74 teams (37 Male, 37 Female)',
      format: 'Group stage + Knockout',
    },
    {
      phase: 'Grand Finale',
      description: 'National championship in Lagos',
      duration: '1 week',
      teams: '16 teams (8 Male, 8 Female)',
      format: 'Knockout tournament',
    },
  ];

  const rules = [
    {
      category: 'Team Composition',
      rules: [
        'Minimum 5 players, maximum 8 players per team',
        'All players must be amateurs (not registered professionals with NFF)',
        'Players must be residents of the state they represent',
        'Age limit: 16-35 years for all participants',
      ],
    },
    {
      category: 'Match Format',
      rules: [
        'Each match is 20 minutes (2 halves of 10 minutes)',
        '5 players on field per team (including goalkeeper)',
        'Maximum 3 substitutions per team per match',
        'No offside rule applies',
      ],
    },
    {
      category: 'Equipment',
      rules: [
        'Standard football boots (no metal studs)',
        'Shin guards mandatory for all players',
        'Team jerseys must be uniform and numbered',
        'Goalkeeper must wear distinguishing colors',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              About Naija5Fest
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              The Tournament
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Nigeria's premier grassroots football championship celebrating unity, talent, and national pride
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  To create Nigeria's most inclusive and exciting grassroots football tournament that 
                  celebrates our diversity, promotes unity, and provides a platform for amateur talent 
                  to shine on a national stage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  To become the premier grassroots football festival that unites Nigeria through sport, 
                  discovers hidden talents, and creates lasting memories while promoting the beautiful 
                  game at the community level.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tournament Concept */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Dual-Tier Tournament Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive competition format that ensures every state gets fair representation 
              and maximum participation opportunities
            </p>
          </div>

          <div className="space-y-8">
            {tournamentStructure.map((phase, index) => (
              <Card key={index} className="border-l-4 border-l-green-600">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{phase.phase}</CardTitle>
                      <CardDescription className="mt-1">{phase.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="mt-2 sm:mt-0">
                      Phase {index + 1}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">{phase.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">{phase.teams}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">{phase.format}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide every aspect of Naija5Fest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rules & Regulations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tournament Rules & Regulations
            </h2>
            <p className="text-xl text-gray-600">
              Essential guidelines for all participating teams
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rules.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/register">
                <Trophy className="mr-2 h-5 w-5" />
                Register Your Team Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Watch the Tournament Concept Video
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get an in-depth look at what makes Naija5Fest special
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
            <Play className="mr-2 h-5 w-5" />
            Watch Video
          </Button>
        </div>
      </section>
    </div>
  );
}