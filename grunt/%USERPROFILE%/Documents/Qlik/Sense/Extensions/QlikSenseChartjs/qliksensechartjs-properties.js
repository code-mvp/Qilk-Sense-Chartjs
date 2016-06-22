define(["./lib/js/contents"],function(contents){"use strict";var dimensions={uses:"dimensions",min:0},measures={uses:"measures",min:0},sorting={uses:"sorting"},settings={uses:"settings",items:{ChartDropDown:{type:"string",component:"dropdown",label:"Chart Selection",ref:"chart",options:chart_options,defaultValue:1},ChartSettings:{type:"items",label:"Chart Settings",items:{ColorPicker:{label:"Color",component:"color-picker",ref:"color",type:"integer",defaultValue:3,show:function(data){return"1"==data.chart||"3"==data.chart||"5"==data.chart}},BackgroundColorSwitch:{label:"Background Color",component:"switch",ref:"background_color_switch",type:"boolean",options:[{value:!0,label:"On"},{value:!1,label:"Not On"}],defaultValue:!1,show:function(data){return"3"==data.chart||"4"==data.chart||"5"==data.chart||"6"==data.chart}},BackgroundColor:{label:"Background Color",component:"color-picker",ref:"background_color",type:"integer",defaultValue:3,show:function(data){return 1==data.background_color_switch&&"3"==data.chart||1==data.background_color_switch&&"5"==data.chart}},ColorSelection:{type:"string",component:"dropdown",label:"Color Selection",ref:"color_selection",options:[{value:"twelve",label:"12 Colors"},{value:"one-handred",label:"100 Colors"}],defaultValue:"twelve",show:function(data){return"2"==data.chart||"4"==data.chart||"6"==data.chart}},SortByAlphabet:{label:"Sort by Alphabetic Order on 2nd Dim",component:"switch",ref:"sort",type:"boolean",options:[{value:!0,label:"On"},{value:!1,label:"Not On"}],defaultValue:!1,show:function(data){return"2"==data.chart||"4"==data.chart||"6"==data.chart}},PointRadiusSize:{type:"number",component:"slider",label:"Point Raduis Size",ref:"point_radius_size",min:1,max:20,step:1,defaultValue:1,show:function(data){return"3"==data.chart||"4"==data.chart||"5"==data.chart||"6"==data.chart}},CumulativeSwitch:{type:"boolean",component:"switch",label:"Cumulative Calculation",ref:"cumulative",options:[{value:!0,label:"On"},{value:!1,label:"Not On"}],defaultValue:!1}}}}};return{type:"items",component:"accordion",items:{dimensions:dimensions,measures:measures,sorting:sorting,settings:settings}}});