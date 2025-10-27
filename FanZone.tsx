import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Trophy, Users, Share2, Heart, MessageCircle, Copy, Gift } from 'lucide-react';
import { toast } from 'sonner';

interface Fan {
  id: string;
  name: string;
  referrals: number;
  points: number;
  avatar?: string;
  location: string;
}

interface Poll {
  id: string;
  question: string;
  options: { text: string; votes: number }[];
  totalVotes: number;
  userVoted: boolean;
}

export default function FanZonePage() {
  const [fanData, setFanData] = useState({
    name: '',
    email: '',
    phone: '',
    favoriteTeam: '',
    state: ''
  });

  const [referralLink] = useState('https://naija5fest.ng/ref/FAN123456');

  // Mock leaderboard data
  const topFans: Fan[] = [
    { id: '1', name: 'Adebayo Johnson', referrals: 247, points: 2470, location: 'Lagos' },
    { id: '2', name: 'Fatima Ahmed', referrals: 198, points: 1980, location: 'Kano' },
    { id: '3', name: 'Emeka Okafor', referrals: 156, points: 1560, location: 'Anambra' },
    { id: '4', name: 'Aisha Bello', referrals: 134, points: 1340, location: 'FCT' },
    { id: '5', name: 'Tunde Adeyemi', referrals: 112, points: 1120, location: 'Oyo' },
    { id: '6', name: 'Chioma Okwu', referrals: 98, points: 980, location: 'Rivers' },
    { id: '7', name: 'Ibrahim Musa', referrals: 87, points: 870, location: 'Kaduna' },
    { id: '8', name: 'Folake Adebayo', referrals: 76, points: 760, location: 'Ogun' },
    { id: '9', name: 'Daniel Chukwu', referrals: 65, points: 650, location: 'Plateau' },
    { id: '10', name: 'Blessing Eze', referrals: 54, points: 540, location: 'Enugu' }
  ];

  // Mock polls data
  const [polls, setPolls] = useState<Poll[]>([
    {
      id: '1',
      question: 'Which state do you think will produce the strongest male team?',
      options: [
        { text: 'Lagos', votes: 45 },
        { text: 'Kano', votes: 32 },
        { text: 'Rivers', votes: 28 },
        { text: 'FCT', votes: 25 }
      ],
      totalVotes: 130,
      userVoted: false
    },
    {
      id: '2',
      question: 'What time of day do you prefer watching matches?',
      options: [
        { text: 'Morning (9AM - 12PM)', votes: 23 },
        { text: 'Afternoon (12PM - 5PM)', votes: 67 },
        { text: 'Evening (5PM - 8PM)', votes: 89 },
        { text: 'Night (8PM - 11PM)', votes: 34 }
      ],
      totalVotes: 213,
      userVoted: false
    }
  ]);

  // Mock social media posts
  const socialPosts = [
    {
      id: '1',
      user: '@LagosFan247',
      content: 'Can\'t wait for #Naija5Fest to begin! Lagos Lions are going all the way! 🦁⚽ #TeamLagos',
      likes: 45,
      retweets: 12,
      time: '2 hours ago'
    },
    {
      id: '2',
      user: '@KanoWarrior',
      content: 'Training hard for #Naija5Fest! The North will rise again! 💪 #KanoWarriors #Naija5Fest',
      likes: 38,
      retweets: 8,
      time: '4 hours ago'
    },
    {
      id: '3',
      user: '@FootballQueen9ja',
      content: 'So proud to see female teams getting equal representation in #Naija5Fest! This is the future! 👑⚽',
      likes: 67,
      retweets: 23,
      time: '6 hours ago'
    }
  ];

  const handleFanRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Welcome to the Fan Zone! Your referral link has been generated.');
    // Reset form
    setFanData({
      name: '',
      email: '',
      phone: '',
      favoriteTeam: '',
      state: ''
    });
  };

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success('Referral link copied to clipboard!');
  };

  const votePoll = (pollId: string, optionIndex: number) => {
    setPolls(polls.map(poll => {
      if (poll.id === pollId && !poll.userVoted) {
        const updatedOptions = [...poll.options];
        updatedOptions[optionIndex].votes += 1;
        return {
          ...poll,
          options: updatedOptions,
          totalVotes: poll.totalVotes + 1,
          userVoted: true
        };
      }
      return poll;
    }));
    toast.success('Vote recorded! Thanks for participating.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Fan Zone
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Join the community, refer friends, participate in polls, and win amazing prizes!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="register" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="register">Fan Registration</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="polls">Polls & Voting</TabsTrigger>
            <TabsTrigger value="social">Social Feed</TabsTrigger>
          </TabsList>

          {/* Fan Registration */}
          <TabsContent value="register" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Join the Fan Community</span>
                  </CardTitle>
                  <CardDescription>
                    Register as a fan to get updates, participate in contests, and earn rewards through referrals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFanRegistration} className="space-y-4">
                    <div>
                      <Label htmlFor="fanName">Full Name *</Label>
                      <Input
                        id="fanName"
                        value={fanData.name}
                        onChange={(e) => setFanData({ ...fanData, name: e.target.value })}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="fanEmail">Email Address *</Label>
                      <Input
                        id="fanEmail"
                        type="email"
                        value={fanData.email}
                        onChange={(e) => setFanData({ ...fanData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="fanPhone">Phone Number</Label>
                      <Input
                        id="fanPhone"
                        value={fanData.phone}
                        onChange={(e) => setFanData({ ...fanData, phone: e.target.value })}
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="favoriteTeam">Favorite Team (Optional)</Label>
                      <Input
                        id="favoriteTeam"
                        value={fanData.favoriteTeam}
                        onChange={(e) => setFanData({ ...fanData, favoriteTeam: e.target.value })}
                        placeholder="Team name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="fanState">State</Label>
                      <Input
                        id="fanState"
                        value={fanData.state}
                        onChange={(e) => setFanData({ ...fanData, state: e.target.value })}
                        placeholder="Your state"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Register as Fan
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Share2 className="h-5 w-5" />
                    <span>Refer & Win</span>
                  </CardTitle>
                  <CardDescription>
                    Share your unique referral link and climb the leaderboard to win amazing prizes!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label>Your Referral Link</Label>
                    <div className="flex space-x-2 mt-2">
                      <Input value={referralLink} readOnly className="flex-1" />
                      <Button onClick={copyReferralLink} size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                      <Gift className="h-4 w-4 mr-2" />
                      Referral Rewards
                    </h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• 10 points for each successful referral</li>
                      <li>• Top 10 referrers win exclusive merchandise</li>
                      <li>• Top 3 get VIP access to the Grand Finale</li>
                      <li>• #1 referrer wins ₦50,000 cash prize!</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">0</div>
                    <div className="text-sm text-gray-600">Your Referrals</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Leaderboard */}
          <TabsContent value="leaderboard" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span>Top 100 Referrers Leaderboard</span>
                </CardTitle>
                <CardDescription>
                  The most active fans who are spreading the Naija5Fest spirit!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topFans.map((fan, index) => (
                    <div key={fan.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        {index < 3 ? (
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                            index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-amber-600'
                          }`}>
                            {index + 1}
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                            {index + 1}
                          </div>
                        )}
                      </div>
                      
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={fan.avatar} alt={fan.name} />
                        <AvatarFallback className="bg-green-100 text-green-700">
                          {fan.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="font-semibold">{fan.name}</div>
                        <div className="text-sm text-gray-600">{fan.location}</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-bold text-green-600">{fan.referrals}</div>
                        <div className="text-xs text-gray-500">referrals</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-bold text-blue-600">{fan.points}</div>
                        <div className="text-xs text-gray-500">points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Polls & Voting */}
          <TabsContent value="polls" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {polls.map((poll) => (
                <Card key={poll.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{poll.question}</CardTitle>
                    <CardDescription>
                      {poll.totalVotes} total votes • {poll.userVoted ? 'You voted' : 'Click to vote'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {poll.options.map((option, index) => {
                      const percentage = poll.totalVotes > 0 ? (option.votes / poll.totalVotes) * 100 : 0;
                      return (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">{option.text}</span>
                            <span className="text-sm text-gray-600">{option.votes} votes</span>
                          </div>
                          <div className="relative">
                            <Progress value={percentage} className="h-2" />
                            <Button
                              onClick={() => votePoll(poll.id, index)}
                              disabled={poll.userVoted}
                              variant="ghost"
                              size="sm"
                              className="absolute inset-0 w-full h-full opacity-0 hover:opacity-10 disabled:cursor-not-allowed"
                            >
                              Vote
                            </Button>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{percentage.toFixed(1)}%</div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Social Feed */}
          <TabsContent value="social" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>#Naija5Fest Social Feed</span>
                </CardTitle>
                <CardDescription>
                  See what fans are saying about the tournament on social media
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialPosts.map((post) => (
                  <div key={post.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-green-100 text-green-700">
                          {post.user.slice(1, 3).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-sm">{post.user}</span>
                          <span className="text-xs text-gray-500">{post.time}</span>
                        </div>
                        <p className="text-sm mb-3">{post.content}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <button className="flex items-center space-x-1 hover:text-red-500">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-green-500">
                            <Share2 className="h-4 w-4" />
                            <span>{post.retweets}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="text-center pt-4">
                  <Button variant="outline">
                    Load More Posts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}