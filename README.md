dust-compile
============

Currently just a basic utility to precompile and package dust templates into various targets.

You run the utlity pointing at a directory containing your dust templates and a config.js. The config.js powers the rest. That's just the convention I am working with and the code is very simple. 

Installation
------------
Don't have this published yet but if you want to grab it and play around:

    $ git clone git://github.com/copenhas/dust-compile
    $ cd ./dust-compile
    $ npm link

Or you can simple d/l the dust-compile script and place it somewhere in the path.

Usage
-----
   dust-compile path/to/dust/template/directory

Annotated example config.js
---------
    {
        //root directory to use for the targets
        "root" : "../",
        "targets" : {
            //hash of file paths for the output targets
            "db/lib/templates.js" : {
                //if dust core should be bundled
                "bundle": true,
                //list of templates in this directory to include
                //template name is the same as the file basename
                "templates" : [
                    "main.dust",
                    "overview.dust",
                    "title.dust",
                    "map.dust",
                    "overview.dust",
                    "floorplan.dust"
                ]
            },
            //you can have multiple
            "js/templates.js" : {
                "templates" : [
                    "cityinfo.dust",
                    "maplayers.dust"
                ]
            }
        }
    }

