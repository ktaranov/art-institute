# Task 2. Nuxt Artworks App Homework

## Requirements

1. Use Nuxt 2
2. Any library is allowed 
3. Implement searching for artworks using the provided API
    1. Typing into the search box triggers search
    2. Calling the API must be done in an efficient manner
4. Implement thumbnail and lazy image loading
    1. API responses already have a base64 thumbnail, but it has tiny dimensions (basically just colors)
    2. Discover the API call to load images (in the documentation), load them lazily when visible on the screen
5. Implement infinite scrolling pagination
7. Keep commits history
8. Fix all errors/warning in console/terminal
6. (Optional) Use Tailwind

The `layout-reference` folder could be used as a starting point, any changes in layout are appreciated.

## Design
[https://www.figma.com/file/2KlFW8tEajX2omTotTy2Ay/Artworks-Example](https://www.figma.com/file/2KlFW8tEajX2omTotTy2Ay/Artworks-Example)

## API
API [https://api.artic.edu/docs/](https://api.artic.edu/docs/#introduction)

To get **Artworks List** use this url:
```
https://api.artic.edu/api/v1/artworks/search?fields=id,title,thumbnail,image_id
```

For **Pagination** use these query parameters
```
page=2&limit=6
```

For **Filtering** use this query parameter:
```
q=foo
```
