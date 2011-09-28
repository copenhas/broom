broom
============

Helps you stay on top of all that dust, regardless if it's inside or outside.

broom is a dust.js template precompiler and package. I was working on a CouchApp and wanted some template
rendering on the server side and some on the client. So this is a utility that helped me keep up with that.

Installation
------------
Don't have this published yet but if you want to grab it and play around:

    $ git clone git://github.com/copenhas/broom
    $ cd ./broom
    $ npm link

Then use npm like normal in a project: `npm install broom`

Usage
-----
   broom path/to/templates

Command assumes a broom.json file will be in that directory.

Annotated example broom.json
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
                ]
            },
            //you can have multiple targets
            "js/templates.js" : {
                "templates" : [
                    "cityinfo.dust",
                    "maplayers.dust"
                ]
            }
        }
    }

