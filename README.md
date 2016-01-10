# biojs-vis-yugene-graph

[![NPM version](http://img.shields.io/npm/v/biojs-vis-yugene-graph.svg)](https://www.npmjs.org/package/biojs-vis-yugene-graph) 

> BioJS component to provide a scatter-plot graphing tool hosted in Stemformatics

## Getting Started
Install the module with: `npm install biojs-vis-yugene-graph`

for more details of the options, see the working example [here](http://biojs.io/d/biojs-vis-yugene-graph)  and the example code [here](https://github.com/rowlandm/biojs-vis-yugene-graph/blob/master/examples/normal_oct4_human.js)


```javascript
var app = require('biojs-vis-yugene-graph');
    ds_id_array =  [5001,4000,6062];

    //The main options for the graph
    var options = {
        initial_padding: 10,
        background_colour: "white",
        background_stroke_colour:  "black",
        background_stroke_width:  "6px",
        circle_radius: 3.5,  // for the scatter points
        colour:colours,
        hover_circle_radius: 10,
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
```

## Documentation

#### Running the instance for developing

Note: If you are running Ubuntu LTS 12.04 or 14.04 you will be behind in npm. To fix this, do the following:
```
sudo apt-get purge nodejs npm

curl -sL https://deb.nodesource.com/setup | sudo bash -

sudo apt-get install -y nodejs

sudo npm install -g watchify biojs-sniper

```

Once you have downloaded the code, you will need to ensure that you create a build directory in the root directory.

You can simply run the following command in the directory to see a website appear on [localhost:9090](http://localhost:9090)

```
npm run w
```

## Contributing

All contributions are welcome.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/rowlandm/biojs-vis-yugene-graph/issues).

## License 
This software is licensed under the Apache 2 license, quoted below.

Copyright (c) 2015, rowlandm

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
