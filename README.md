### CatDex
Jack owns so many cats that he can't keep track of all of them. He needs a way to keep track of all of them. Almost like a Pokédex for cats.


## Functionality

- [x] View a list of cats
- [x] Each cat has a name, breed, description and image
- [x] Can add new cat
- [x] Pulls in random picture for cat from [CatAPI](https://thecatapi.com/)
- [x] Stores all cat data using redux
- [x] Can delete cat
- [x] Confirmation alert for delete cat
- [x] Empty state for no cats
- [x] Error messages within Add Cat Form
- [ ] Can edit cat
- [ ] Redux to save cat form
- [ ] Persist data using redux persist

[![Demo Catalpha](https://media.giphy.com/media/dWsN2abs3C5Un0bA4b/giphy.gif)](https://www.youtube.com/watch?v=pKzez4-whqY&feature=youtu.be)


## Installation

CatDex is written in React Native, utlizing redux for state management.

Install node modules

```ruby
npm install
```

Link vector icons

```
npx react-native link
```

To install on iOS

```ruby
npx react-native run-ios
```

To install on Android 

```ruby
npx react-native run-android 
```

## Challenges

I was tasked with designing this app myself, and gave myself three days for this project. Many UX problems occured when adding functionality for delete cat - namely needing an empty state for no cats as well as a confirmation message. Edit cats was a bigger problem - I designed an additional button on the Home page, which triggered the ability to edit the text, which turned the edit button into a tick mark for "saving." However, this opened up the UX design problem that more than one cat could be edited at a time. I spent a lot of time thinking through the problem, but it proved to be complex. A possible solution is to design a new page in which to display the cat info upon click, but I ultimetly ran out of time to design such a page. At a later date I hope the add that functionality, and am open to suggestions!

## Code - interesting bits

I designed CatDex to be dynamic. In catJson.js I created the key:
```ruby
fieldTypes: ['name', 'breed', 'description']
```
This field can be edited easily to remove a key from both the list of cats on the home page, and the form to add cats. This was done to quickly add and remove fields to play with the design. Have a go!


## Author

Hannah Carney, hannahcarneyart@gmail.com
