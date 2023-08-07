// TODO: Create a page with a form to submit a new Post
import { StyleSheet, ScrollView, View } from 'react-native';
import { PostForm } from './PostForm';

const WritePostPage = () => {
  return(
    <ScrollView>
      <View style={styles.card}>
        <PostForm/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,

  }
})

export default WritePostPage;