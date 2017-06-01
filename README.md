# MeteorReactChartjs - a simple demo

## Meteor + React + Chartjs

Example App, keeping things as simple as possible and demonstrating the use of ChartJS with Meteor + React. The react-chartjs-2 wrapper is used, being the most recent and up to date found of it's kind.

Install meteor of not already done - see www.meteor.com

Download and extract compressed file or use git to clone and `cd` into MeteorReactChartjs directory to then run:

              meteor npm install
              meteor run
              
As this is purely for the purposes of a very simple demonstation, this branch 
uses an (insecure) implementation of a mongo db collection. The 'autopublish' 
and 'insecure' packages will be removed and pub / sub together with methods to
 update values in the db from the interface in a future branch.

In this version, to insert / modify data to show in the doughnut graph, at the
command line in the project folder, start up the mongo client with `meteor mongo`
and run :

              db.doughnutdata.remove({}); db.doughnutdata.insert({'data': 10}); db.doughnutdata.insert({'data': 400}); db.doughnutdata.insert({'data': 10})

altering the numbers to see changes update dynamically
