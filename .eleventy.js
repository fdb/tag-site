module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("sortedProjects", (api) =>
    api.getFilteredByTag("project").sort((a, b) => b.data.order - a.data.order),
  );

  eleventyConfig.addPassthroughCopy("static");
};
