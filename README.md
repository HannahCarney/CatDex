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
react-native link
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

I was tasked with designing this app myself, and gave myself three days for this project. Edit cats proved to be a very complex UX journey that I was unable to complete within in allotted three days. Many UX problems occured when adding functionality for delete cat - namely needing an empty state for no cats. 

## Code - interesting bits

I designed CatDex to be dynamic. In catJson.js I created the key:
```ruby
fieldTypes: ['name', 'breed', 'description']
```
This field can be edited easily to remove a key from both the list of cats on the home page, and the form to add cats. This was done to quickly add and remove fields to play with the design. Have a go!


## Author

Hannah Carney, hannahcarneyart@gmail.com
