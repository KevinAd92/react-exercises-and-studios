import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor(){
    let authorLink = "https://www.thekitchn.com/alfredo-sauce-267560://www.thekitchn.com/kid-friendly-fettuccine-alfredo-recipe-love-letter-23669575";
    let authorPhoto = "https://www.reddit.https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_96,h_96,c_fill,g_auto/staff-headshots%2FPatty-Catalano-023/r/BobsBurgers/comments/9s4a6i/i_was_a_generic_chef/#lightbox";
    let authorName = "Lisa Patty Catalano";

        return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Lisa" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>My Son Loves This Fettuccine Alfredo Recipe So Much, I Make It Twice a Week</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render(){
        return(
            <div> 
            <div>
               <h1>Family Secret Fettuccine</h1>
               <p>quick homemade alfredo</p>
            </div>
            <RecipeAuthor />
         </div>
        )
    }

}
export default RecipeDescription;