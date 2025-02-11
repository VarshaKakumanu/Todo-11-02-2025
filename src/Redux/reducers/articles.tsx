import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Article {
  id: number;
  title: string;
  content: string;
}

// Load initial state from localStorage
const getInitialArticles = (): Article[] => {
  const storedArticles = localStorage.getItem("articles");
  return storedArticles ? JSON.parse(storedArticles) : [];
};

const initialState: Article[] = getInitialArticles();

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<Article>) => {
      state.push(action.payload);
      localStorage.setItem("articles", JSON.stringify(state));
    },
    deleteArticle: (state, action: PayloadAction<number>) => {
      const updatedArticles = state.filter((article) => article.id !== action.payload);
      localStorage.setItem("articles", JSON.stringify(updatedArticles));
      return updatedArticles;
    },
    editArticle: (state, action: PayloadAction<{ id: number; title: string; content: string }>) => {
      const article = state.find((article) => article.id === action.payload.id);
      if (article) {
        article.title = action.payload.title;
        article.content = action.payload.content;
      }
      localStorage.setItem("articles", JSON.stringify(state));
    },
  },
});

export const { addArticle, deleteArticle, editArticle } = articleSlice.actions;
export default articleSlice.reducer;
