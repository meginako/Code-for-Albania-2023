// TODO: Add a form here that has spaces for the title, content & a submit button.
// TODO DB: DB is updated on form submission
import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import React from 'react';
import {db} from './Authentication/firebase';
import firebase from 'firebase';

export const PostForm = (props) => {

  const [content, onChangeContent] = React.useState("");
  const [title, onChangeTitle] = React.useState("");
  const [image, onChangeImage] = React.useState("");
  
  return(
    <View>
      <Text style={styles.helptext}> Title </Text>
       <TextInput
        editable
        onChangeText={text => onChangeTitle(text)}
        value={title}
        style={styles.textinput}
      />

      <Text style={styles.helptext}> Image </Text>
      <TextInput
        editable
        onChangeText={text => onChangeImage(text)}
        value={image}
        style={styles.textinput}
      />

      <Text style={styles.helptext}> Content </Text>
      <TextInput
        editable
        multiline
        numberOfLines={10}
        maxLength={50}
        onChangeText={text => onChangeContent(text)}
        value={content}
        style={styles.textinput}
      />
      <Pressable style={styles.button} onPress={() => {submitBlogPost(title, content, image)}}>
        <Text style={styles.buttonText}>Submit Post</Text>
    </Pressable>
    </View>
  )
}

function submitBlogPost(title, content, image){
  if (title == "" || content == ""){
    console.log("title or content is empty")
  }
  
  let post = {
    title: title,
    content: content,
    image: image
  }

  db.collection("posts").add(post).then((docRef) => console.log("new post: " + docRef.id)).catch((error) => console.error("error adding post: ", error))

}

const styles = StyleSheet.create({
  helptext:{
    flex: 1,
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: 700
  },
  textinput:{
    backgroundColor: "white",
    fontSize: 16,
    padding: 5,
    borderWidth : 2,
    borderColor: '#6E356B'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FCBDF9',
  },
  buttonText:{
    color: 'black',
    fontSize: 12,
    fontWeight: 700
  }
});