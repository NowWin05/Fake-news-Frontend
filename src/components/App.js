/**
 * DataController.js
 * Utility functions for preparing data for components
 */

// Prepare social media metrics for rendering
export const prepareSocialMetrics = (socialMetrics) => {
  if (!socialMetrics || typeof socialMetrics !== 'object') {
    return {};
  }

  // Ensure all platforms have consistent data structure
  const platforms = Object.keys(socialMetrics).filter(key => key !== 'overall');
  const preparedMetrics = {};

  platforms.forEach(platform => {
    const metrics = socialMetrics[platform];
    preparedMetrics[platform] = {
      shares: metrics.shares || 0,
      engagement: metrics.engagement || 0,
      sentiment: metrics.sentiment || 0,
      hashtags: metrics.hashtags || []
    };
  });

  // Include overall metrics
  if (socialMetrics.overall) {
    preparedMetrics.overall = {
      viralityScore: socialMetrics.overall.viralityScore || 0,
      publicInterest: socialMetrics.overall.publicInterest || 0,
      discussionPolarity: socialMetrics.overall.discussionPolarity || 'balanced'
    };
  }

  return preparedMetrics;
};

// Prepare sentiment data for rendering
export const prepareSentimentData = (sentiment) => {
  if (!sentiment || typeof sentiment !== 'object') {
    return {
      positive: 0,
      negative: 0,
      neutral: 100,
      tone: 'neutral'
    };
  }

  return {
    positive: sentiment.positive || 0,
    negative: sentiment.negative || 0,
    neutral: sentiment.neutral || 0,
    tone: sentiment.tone || 'neutral'
  };
};