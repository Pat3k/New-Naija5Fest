import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, Trophy, Users, Star, Award } from 'lucide-react';

interface Match {
  id: string;
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
  date: string;
  time: string;
  venue: string;
  round: string;
  status: 'upcoming' | 'live' | 'completed';
  category: 'male' | 'female';
  state: string;
  attendance?: number;
  highlights?: string[];
}

export default function FixturesPage() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River',
    'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
    'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun',
    'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];

  // Comprehensive fixture data
  const fixtures: Match[] = [
    // Live Matches
    {
      id: '1',
      team1: 'Lagos Lions FC',
      team2: 'Lagos Eagles United',
      score1: 2,
      score2: 1,
      date: '2024-11-26',
      time: '15:30',
      venue: 'Teslim Balogun Stadium',
      round: 'Quarter Final',
      status: 'live',
      category: 'male',
      state: 'Lagos',
      attendance: 15000,
      highlights: ['Goal by Adebayo (23min)', 'Yellow card Okafor (45min)']
    },
    {
      id: '2',
      team1: 'Kano Pillars Ladies',
      team2: 'Kano Queens FC',
      score1: 1,
      score2: 1,
      date: '2024-11-26',
      time: '17:00',
      venue: 'Sani Abacha Stadium',
      round: 'Semi Final',
      status: 'live',
      category: 'female',
      state: 'Kano',
      attendance: 8500,
      highlights: ['Goal by Fatima (12min)', 'Goal by Aisha (34min)']
    },

    // Upcoming Matches
    {
      id: '3',
      team1: 'Rivers United FC',
      team2: 'Rivers Stars',
      date: '2024-11-27',
      time: '16:00',
      venue: 'Liberation Stadium',
      round: 'Final',
      status: 'upcoming',
      category: 'male',
      state: 'Rivers',
      attendance: 0
    },
    {
      id: '4',
      team1: 'FCT Eagles',
      team2: 'FCT Panthers',
      date: '2024-11-27',
      time: '14:00',
      venue: 'National Stadium Abuja',
      round: 'Quarter Final',
      status: 'upcoming',
      category: 'male',
      state: 'FCT',
      attendance: 0
    },
    {
      id: '5',
      team1: 'Anambra Angels',
      team2: 'Anambra Queens',
      date: '2024-11-28',
      time: '15:30',
      venue: 'Alex Ekwueme Stadium',
      round: 'Semi Final',
      status: 'upcoming',
      category: 'female',
      state: 'Anambra',
      attendance: 0
    },
    {
      id: '6',
      team1: 'Oyo Shooters',
      team2: 'Oyo Warriors',
      date: '2024-11-28',
      time: '17:00',
      venue: 'Lekan Salami Stadium',
      round: 'Quarter Final',
      status: 'upcoming',
      category: 'male',
      state: 'Oyo',
      attendance: 0
    },

    // Completed Matches
    {
      id: '7',
      team1: 'Lagos Tigers FC',
      team2: 'Lagos Panthers United',
      score1: 4,
      score2: 2,
      date: '2024-11-25',
      time: '16:00',
      venue: 'National Stadium Lagos',
      round: 'Round of 16',
      status: 'completed',
      category: 'male',
      state: 'Lagos',
      attendance: 12000,
      highlights: ['Hat-trick by Emeka (15, 23, 67min)', 'Red card Tunde (78min)', 'Goal by Kemi (89min)']
    },
    {
      id: '8',
      team1: 'Plateau Panthers',
      team2: 'Plateau United',
      score1: 1,
      score2: 3,
      date: '2024-11-25',
      time: '14:30',
      venue: 'Rwang Pam Stadium',
      round: 'Round of 16',
      status: 'completed',
      category: 'male',
      state: 'Plateau',
      attendance: 9500,
      highlights: ['Goal by Daniel (8min)', 'Double by Ibrahim (34, 56min)', 'Own goal (72min)']
    },
    {
      id: '9',
      team1: 'Delta Force Ladies',
      team2: 'Delta Queens FC',
      score1: 2,
      score2: 0,
      date: '2024-11-24',
      time: '15:00',
      venue: 'Stephen Keshi Stadium',
      round: 'Quarter Final',
      status: 'completed',
      category: 'female',
      state: 'Delta',
      attendance: 7200,
      highlights: ['Goal by Grace (25min)', 'Penalty goal by Joy (67min)', 'Clean sheet by goalkeeper']
    },
    {
      id: '10',
      team1: 'Kaduna United FC',
      team2: 'Kaduna Warriors',
      score1: 3,
      score2: 3,
      date: '2024-11-24',
      time: '17:30',
      venue: 'Ahmadu Bello Stadium',
      round: 'Round of 16',
      status: 'completed',
      category: 'male',
      state: 'Kaduna',
      attendance: 11000,
      highlights: ['Thriller match!', '6 goals scored', 'Penalties decided winner (5-4)', 'Man of the Match: Suleiman']
    },
    {
      id: '11',
      team1: 'Cross River Angels',
      team2: 'Cross River United',
      score1: 1,
      score2: 2,
      date: '2024-11-23',
      time: '16:30',
      venue: 'U.J. Esuene Stadium',
      round: 'Round of 16',
      status: 'completed',
      category: 'female',
      state: 'Cross River',
      attendance: 6800,
      highlights: ['Late winner by Blessing (88min)', 'Yellow cards: 4', 'Saves of the day by both keepers']
    },
    {
      id: '12',
      team1: 'Bauchi Stars FC',
      team2: 'Bauchi Eagles',
      score1: 0,
      score2: 1,
      date: '2024-11-23',
      time: '14:00',
      venue: 'Abubakar Tafawa Balewa Stadium',
      round: 'Round of 16',
      status: 'completed',
      category: 'male',
      state: 'Bauchi',
      attendance: 8200,
      highlights: ['Defensive masterclass', 'Only goal by Musa (56min)', 'Multiple saves by both goalkeepers']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-gray-500';
      case 'live':
        return 'bg-red-500 animate-pulse';
      case 'upcoming':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'FT';
      case 'live':
        return 'LIVE';
      case 'upcoming':
        return 'Upcoming';
      default:
        return '';
    }
  };

  const filteredFixtures = fixtures.filter(fixture => {
    if (selectedState && fixture.state !== selectedState) {
      return false;
    }
    if (selectedCategory && fixture.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  const upcomingMatches = filteredFixtures.filter(f => f.status === 'upcoming');
  const liveMatches = filteredFixtures.filter(f => f.status === 'live');
  const completedMatches = filteredFixtures.filter(f => f.status === 'completed');

  const MatchCard = ({ match }: { match: Match }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{match.round}</Badge>
            <Badge variant="outline" className="capitalize">{match.category}</Badge>
          </div>
          <Badge className={`text-white ${getStatusColor(match.status)}`}>
            {getStatusText(match.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Teams and Score */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-lg">{match.team1}</span>
                {match.score1 !== undefined && (
                  <span className="text-2xl font-bold text-green-600">{match.score1}</span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg">{match.team2}</span>
                {match.score2 !== undefined && (
                  <span className="text-2xl font-bold text-green-600">{match.score2}</span>
                )}
              </div>
            </div>
          </div>

          {/* Match Details */}
          <div className="border-t pt-3 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{new Date(match.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              <span>{match.time}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{match.venue}, {match.state}</span>
            </div>
            {match.attendance !== undefined && match.attendance > 0 && (
              <div className="flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-2" />
                <span>{match.attendance.toLocaleString()} spectators</span>
              </div>
            )}
          </div>

          {/* Highlights */}
          {match.highlights && match.highlights.length > 0 && (
            <div className="border-t pt-3">
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Star className="h-4 w-4 mr-1" />
                Highlights
              </h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {match.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {match.status === 'upcoming' && (
            <Button className="w-full mt-4" variant="outline" size="sm">
              Set Reminder
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Fixtures & Results
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Follow all 74 concurrent tournaments across Nigeria&apos;s 37 states
            </p>
            <div className="mt-6 flex justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">{fixtures.length}</div>
                <div className="text-green-200">Total Matches</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{liveMatches.length}</div>
                <div className="text-green-200">Live Now</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{upcomingMatches.length}</div>
                <div className="text-green-200">Upcoming</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="min-w-[200px]">
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select State" />
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
              </div>
              <div className="min-w-[150px]">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Upcoming</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span>Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Brackets */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="live" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="live" className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span>Live Matches ({liveMatches.length})</span>
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Upcoming ({upcomingMatches.length})</span>
              </TabsTrigger>
              <TabsTrigger value="results" className="flex items-center space-x-2">
                <Trophy className="h-4 w-4" />
                <span>Results ({completedMatches.length})</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="live" className="space-y-6">
              {liveMatches.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {liveMatches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Live Matches</h3>
                    <p className="text-gray-600">There are currently no live matches. Check back later!</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-6">
              {upcomingMatches.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingMatches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Upcoming Matches</h3>
                    <p className="text-gray-600">All matches for the selected filters have been completed.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              {completedMatches.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedMatches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Results Available</h3>
                    <p className="text-gray-600">No completed matches found for the selected filters.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Match of the Day */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 mr-2 text-yellow-500" />
              Match of the Day
            </h2>
            <p className="text-gray-600">Don&apos;t miss today&apos;s featured encounter</p>
          </div>
          
          <Card className="max-w-2xl mx-auto border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardHeader className="text-center pb-4">
              <Badge className="bg-yellow-500 text-white mx-auto w-fit mb-4">Featured Match</Badge>
              <CardTitle className="text-2xl">Rivers United FC vs Rivers Stars</CardTitle>
              <CardDescription className="text-lg">State Championship Final</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-4 text-lg">
                <Calendar className="h-5 w-5" />
                <span>Tomorrow, November 27th at 4:00 PM</span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-lg">
                <MapPin className="h-5 w-5" />
                <span>Liberation Stadium, Port Harcourt</span>
              </div>
              <p className="text-gray-600 max-w-md mx-auto">
                The ultimate showdown between Rivers&apos; finest teams. Winner advances to the National Championship!
              </p>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
                Get Match Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}