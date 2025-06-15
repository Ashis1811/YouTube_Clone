export const API_KEY = 'AIzaSyCSzFgtpG_0psW9OpM8-W2pXXnx9K_ZVWE';

export const value_converter = (value) => {
    if(value >= 1000000) 
    {
        return Math.floor(value / 1000000) + 'M';
    }
    else if(value >= 1000) 
    {
        return Math.floor(value / 1000) + 'K';
    }
    else{
        return value;
    }
}