export interface ReviewsModel {
  id: number,
  page: number,
  results: {
    author: string,
    author_details: {
      name: string,
      username: string,
      avatar_path: string | null,
      rating: number | null
    },
    content: string,
    created_at: string,
    id: string,
    updated_at: string,
    url: string
  }[],
  total_pages: number
}
