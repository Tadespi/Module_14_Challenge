// Place url in a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//Fetch data!
d3.json(url).then(function(data) {
    console.log(data);
});

// Dropdown and dashboard set up
function init() {
    let dropdownMenu = d3.select("#selDataset");
    d3.json(url).then((data) => {
        let names = data.names;
        names.forEach((id) => {
            console.log(id);
            dropdownMenu.append("option")
            .text(id)
            .property("value",id);
        });


// First sample set up
        let first_sample = names[0];
        console.log(first_sample);

// Plot set up
        buildMeta(first_sample);
        buildBar(first_sample);
        buildBubble(first_sample);
    });
};

// Metadata set up for sample size
function buildMeta(sample) {
    d3.json(url).then((data) => {
        let metadata = data.metadata;
        let value = metadata.filter(result => result.id == sample);
        console.log(value)
        let valueData = value[0];

        d3.select("#sample-metadata").html("");

        // Adding sample keys and values to panel
        Object.entries(valueData).forEach(([key,value]) => {
            console.log(key,value);

            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });
};

// Bar Graph Function
function buildBar(sample) {
    d3.json(url).then((data) => {
        let sampleInfo = data.samples;
        let value = sampleInfo.filter(result => result.id == sample);
        let valueData = value[0];

        // Bar Graph values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        console.log(otu_ids, otu_labels, sample_values);

        // Top Ten!
        let xticks = sample_values.slice(0,10).reverse();
        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();

        // Setting up bar graph
        let trace = {
            x: xticks,
            y: yticks,
            text: otu_labels,
            type: "bar",
            orientation: "h",
        };

        //Layout
        let layout  = {
            title: "Top OTUs"
        };

        // Plot
        Plotly.newPlot("bar", [trace], layout)

    });
};

// Bubble Chart 
function buildBubble(sample) {
    d3.json(url).then((data) => {
        let sampleInfo = data.samples;
        let value = sampleInfo.filter(result => result.id == sample);
        let valueData = value[0];

        // Labels
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        console.log(otu_ids, otu_labels, sample_values);

        // Set up Bubble Chart
        let second_trace = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Pastel"
            }
        };

        // Layout
        let layout = {
            title: "Bacteria and its Sample Values",
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
            yaxis: {title:"Sample Values"},
        };

        // Plot using Plotly
        Plotly.newPlot("bubble", [second_trace], layout)
    });
};

// Function to update dashboard
function optionChanged(value) {
    console.log(value);

    // Call functions
    buildMeta(value);
    buildBar(value);
    buildBubble(value);
};

//Call init!
init();