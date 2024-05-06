# Belly Button Biodiversity Dashboard

# Description
This project involves building an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset highlights a few microbial species present in over 70% of people, while others are relatively rare.

# Instructions
- Use the D3 library to read in samples.json from the provided URL.
- Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in each individual.
- Use sample_values as the values for the bar chart.
- Use otu_ids as the labels for the bar chart.
- Use otu_labels as the hovertext for the chart.
- Create a bubble chart that displays each sample.
- Use otu_ids for the x values.
- Use sample_values for the y values.
- Use sample_values for the marker size.
- Use otu_ids for the marker colors.
- Use otu_labels for the text values.
- Display the sample's metadata, i.e., an individual's demographic information.
- Loop through each key-value pair from the metadata JSON object and create a text string.
- Append an html tag with that text to the #sample-metadata panel.
- Update all the plots when a new sample is selected.
- Deploy the app to a free static page hosting service, such as GitHub Pages.

# Website
https://robdunnlab.com/projects/belly-button-biodiversity/
