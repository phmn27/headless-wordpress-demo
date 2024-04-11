// Define a class for customizing WordPress
class CustomiseWordPress {
    // Constructor function taking a name parameter
    constructor(name) {
      // Set post type to "post"
      let postType = "post";
      // Add a filter to decode HTML entities for REST API title
      add_filter('rest_prepare_' + postType, this.decodeRestApiTitle, 20, 3);
    }
  
    // Method to decode HTML entities from REST API title
    decodeRestApiTitle(response, post, request) {
      // Check if post is set
      if (post) {
        // Decode title and content HTML entities
        let decodedTitle = html_entity_decode(response.data['title']['rendered']);
        let decodedContent = html_entity_decode(response.data['content']['rendered']);
        // Set decoded title and content back to response object
        response.data['title']['rendered'] = decodedTitle;
        response.data['content']['rendered'] = decodedContent;
      }
      // Return modified response
      return response;
    }
  }
  