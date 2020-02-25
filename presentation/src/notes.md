Hello everyone, this is Keita and Helena. Today we would like to introduce our work "Po-K-Means". The name surely tells you the dataset and the method I suppose.

Okay, let's go demo then.

Here we have three views in the screen. The top-left is the scatterplot where the result of the k-means clustering is displayed. We can change the k parameter, change the axes. and for example search a pokemon. What you like? Pikachu? OK. Yeah this is Pikachu! So he has a middle-class attack and defense. How about other parameters? Then you can add the axis to parallel-coordinates right here. HP, Type, weight, and well catch rate? yeah something like this.

If you need a wider parallel-coordinates... just change the window size like this.

Okay! This was a quick demo. You can try it here if you want.

Then we want to present somehow, possibly different from other groups. For this assignment, we have adopted the atomic design, which has five-layer of component sets. This enables us to make components more reusable, possibly for final projects? But then, if we have multiple files, how do we manage the "global state" of the app?

Then we have used apollo client and GraphQL to manage this. The global state is read by page layer, the top one it will pass the state to the downstream layers. Then, some components such as selectors or search box make a query that changes the global state. Then the change will automatically propagated into the current visualization.

Technically, we have something like this for the initial state. This is for scatter plot, parallel, and the details view.

And then this function will change the state. This is for scatter and parallel.

The changed state is then read by the page layer to reflect the change.

Other topics, we have programmatically assigned evenly distributed hue to k clusters. But selected the saturation and lightness just to make them match the background. Also, another point is that we have dealt with categorical variables. Then we needed a special handling method to distinguish them.

Thoughts. Even we used 15% opacity for lines in parallel-coordinates, there have been a lot of cluttering in the plot. Bundling the lines would be one solution, but we're not sure if it is applicable when the axis handles a continuous value. The overlaps in the scatterplot was another problem when the user want to pick a mark behind another. Possibly, we can merge overlapping marks into a large mark and let users select from the sub-list.

Thank you.
