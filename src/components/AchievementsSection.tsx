
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Briefcase, Book, Code } from 'lucide-react';

const AchievementCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  date: string;
  description: string;
}> = ({ icon, title, date, description }) => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 glass-card">
      <CardContent className="p-6 flex gap-4">
        <div className="shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{title}</h3>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      icon: <Award />,
      title: "Top 1% in National Coding Competition",
      date: "2023",
      description: "Achieved a rank in the top 1% among 10,000+ participants in the national algorithm competition."
    },
    {
      icon: <Briefcase />,
      title: "Senior Banking Professional Award",
      date: "2018",
      description: "Recognized for exceptional contribution to the banking sector with innovative financial solutions."
    },
    {
      icon: <Code />,
      title: "500+ Competitive Programming Problems",
      date: "2021-Present",
      description: "Solved over 500 algorithmic challenges on platforms like LeetCode, Codeforces, and HackerRank."
    },
    {
      icon: <Book />,
      title: "Published Article on AI Ethics",
      date: "2022",
      description: "Article on ethical considerations in agentic AI systems published in a respected tech journal."
    },
    {
      icon: <Award />,
      title: "Tech Transition Excellence Award",
      date: "2020",
      description: "Recognized for excellence in transitioning from banking to technology with impact."
    },
    {
      icon: <Code />,
      title: "Open Source Contributor",
      date: "2021-Present",
      description: "Regular contributor to open-source Python libraries focused on AI and financial technology."
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-white relative">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Milestones that mark my professional journey across both banking and technology sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              date={achievement.date}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
