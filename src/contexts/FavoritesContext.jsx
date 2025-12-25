import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('begena-favorites');
        return saved ? JSON.parse(saved) : [];
    });

    const toggleFavorite = (id) => {
        setFavorites(prev => {
            const newFavorites = prev.includes(id)
                ? prev.filter(fav => fav !== id)
                : [...prev, id];
            localStorage.setItem('begena-favorites', JSON.stringify(newFavorites));
            return newFavorites;
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
