import React from 'react';
import { Composition } from 'remotion';
import { MyComposition } from './composition';

export const RemotionRoot: React.FC = () => {
  return (
    <div>
      <Composition
        id="Empty"
        component={MyComposition}
        durationInFrames={750}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          githubData: {
            totalCommits: 10,
            stars: 5,
            pullRequests: 2,
            linesOfCode: 15000,
            commitsThisYear: 50,
            reposThisYear: 3,
            biggestRepo: 'awesome-repo',
            openSourceContributions: 12,
            achievements: ['Top Contributor', '100 Commits'],
            repoWithMostStars: 'super-star-repo',
            topLanguages: ['JavaScript', 'TypeScript', 'Python'],
          },
        }}
      />
    </div>
  );
};
