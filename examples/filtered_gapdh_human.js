// if you don't specify a html file, the sniper will generate a div with id "rootDiv"
var app = require("biojs-vis-yugene-graph");
function round_to_two_decimal_places(num){
    new_num = Math.round(num * 100) / 100;
    return new_num;
}

//An array of colours which are used for the different probes
var colours = ["DarkOrchid", "Orange", "DodgerBlue", "Blue","BlueViolet","Brown", "Deeppink", "BurlyWood","CadetBlue",
"Chartreuse","Chocolate","Coral","CornflowerBlue","Crimson","Cyan", "Red", "DarkBlue",
"DarkGoldenRod","DarkGray", "Tomato", "Violet","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen",
"DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSlateBlue","DarkTurquoise",
"DarkViolet","DeepPink","DeepSkyBlue","DodgerBlue","FireBrick","ForestGreen","Fuchsia",
"Gold","GoldenRod","Green","GreenYellow","HotPink","IndianRed","Indigo"];


// tip which is displayed when hovering over a collumn. Displays the sample type 
//of the collumn
var tip = d3.tip()
    .attr('class', 'd3-tip')
    .html(function(d) {
        sample_type = d.sample_type;
        temp =
            "Sample Type: " +  sample_type + "<br/>"
        return temp;
    });

// this tooltip function is passed into the graph via the tooltip
var tooltip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([0, +110])
    .html(function(d) {
        probe = d.Probe;
        // 2 decimal places on the display only
        Expression_Value = round_to_two_decimal_places(d[y_column]);
        lwr = round_to_two_decimal_places(d.Expression_Value - d.Standard_Deviation);
        upr = round_to_two_decimal_places(d.Expression_Value + d.Standard_Deviation);
        temp = 
            "Sample: " + d.sample_id +"<br/>"+
            "Probe: " + d.probe_id +"<br/>"+
            "Dataset: " + d.ds_id +"<br/>"+
            "YuGene Value: " + Expression_Value +"<br/>"
           // "MSC predicted "+msc_call+"/"+total+" iterations<br/>"
        return temp; 
    });

//The url's to the data displayed
data_url= '../data/return_yugene_filtered_graph_dataENSG00000111640.tsv'; // for 3000,5003,5008 datasets filtered

/* Extracting the data from the csv files for use in the graph
 * Also sets relevent options based on the data passed in (for example
 * calculating the min and max values of the graph */
d3.tsv(data_url,function (error,data){

    max = 1;  // YuGene is between 1 and 0
    min = 0;
    number_of_increments = 0;
    count = 0; 

    data.forEach(function(d){
        // ths + on the front converts it into a number just in case
        d.chip_type = +d.chip_type;
        d.ds_id = +d.ds_id;
        d.x_position = +d.x_position;
        d.yugene_value = +d.yugene_value;
        
    });

    title = "GAPDH Yugene Graph for Humans with datasets 3000,5008 and 5003";
    subtitle1 = "Subtitle"
    subtitle2 = "Subtitle"
    target = rootDiv;
    $('body').append('<div id="yugene_value_start"></div>');
    $('body').append('<div id="yugene_value_end"></div>');

    width = 600;
    ds_id_array =  [5008,3000,5003];
    //The main options for the graph
    var options = {
        initial_padding: 10,
        background_colour: "white",
        background_stroke_colour:  "black",
        background_stroke_width:  "6px",
        circle_radius: 3.5,  // for the scatter points
        colour:colours,
        hover_circle_radius: 10,
        fill_area_colour: "green",
        setup_brush: false, 
        ds_id_array: ds_id_array,
        data: data,
        height: 400,
        legend_class: "legend",
        increment: number_of_increments,
        legend_range: [0,100],
        line_stroke_width: "2px",
        margin_legend: width - 190,
        margin:{top: 100, left:70, bottom: 50, right: 30},
        //2 is the chosen padding. On either side there will be padding = to the interval between the points
        //1 gives 1/2 the interval on either side etc.
        padding: 2,
        show_horizontal_line_labels: true,
        subtitle1: subtitle1,
        subtitle2: subtitle2,
        stroke_width:"3px",
        target: target,
        title: title,
        title_class: "title",
        tip: tip,//second tip to just display the sample type
        tooltip: tooltip, // using d3-tips
        //tooltip1: tooltip1, // using d3-tips unique_id: "chip_id",
        watermark:"http://www.stemformatics.org/img/logo.gif",
        width: 800,
        x_axis_text_angle:-45, 
        x_axis_title: "Samples",
        x_column: 'x_position',
        x_middle_title: 500,
        y_axis_title: "YuGene Value",
        y_column: 'yugene_value'
    }



    var instance = new app(options);

    // Get the d3js SVG element
    var tmp = document.getElementById(rootDiv.id);
    var svg = tmp.getElementsByTagName("svg")[0];
    // Extract the data as SVG text string
    var svg_xml = (new XMLSerializer).serializeToString(svg);

}); 

