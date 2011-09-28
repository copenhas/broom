broom
============

Helps you stay on top of all that dust, regardless if it's inside or outside.

broom is a dust.js template precompiler and package. I was working on a CouchApp and wanted some template
rendering on the server side and some on the client. So this is a utility that helped me keep up with that.

If you don't know what [Dust.js](http://akdubya.github.com/dustjs "Github - dustjs") is, I would suggest checking it out. Pretty nice templating in the classic node.js way
(async and with streaming).

Installation
------------
Don't have this published yet but if you want to grab it and play around:

    $ git clone git://github.com/copenhas/broom
    $ cd ./broom
    $ npm link

Then use npm link in a project to "link install": `npm link broom`

Usage
-----
Assuming broom is in your path:

    broom path/to/templates

Command assumes a broom.json file will be in that directory. Targets do not have to exist but the directory they
are to be written to does. If the target already exists they will be deleted first.

Bundling dust.js core currently doesn't work. I seemed to have broken it recently...

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
    
Example Directory

    project/
      db/
        lib/
          templates.js #first target in config
      dust/
        broom.config
        cityinfo.dust
        main.dust
        map.dust
        maplayers.dust
        overview.dust
        title.dust
      js/
        templates.js #second target
