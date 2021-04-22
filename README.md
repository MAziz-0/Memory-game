<h1 align="center">Naruto Memories</h1>

[View the live project here.](https://maziz-0.github.io/Naruto-Memories/)

I have created a Memory card game with a fanfare twist. I've meshed a great card game with one of my favourites animations to create Naruto Memories. A plot filled card matching game that pays homage to the great show called Naruto. As a fan, it has been a pleasure to bring my study of coding and love of animation together. I hope you enjoy it.

<h2 align="center"><img src="https://user-images.githubusercontent.com/41737293/115557943-1f684800-a2aa-11eb-9930-e8ef156e19e5.JPG"></h2>


## How to Play
1. Click on any card to reveal all the cards; memorise the card pairs before they flip back.
2. Click on any card to start the timer.
3. Use your memory to remember what images show up on which card. You have 30 seconds to match all the cards
4. You win the game when all 16 cards are matched!

### Project Specifications

| CRITERIA | MEETS SPECIFICATIONS
|---|:---
| Splash Screen | The players are greeted with a splash screen introducing the story behind the game. How to play is on the splash screen.
| Memory Game Logic | The game randomly shuffles the cards. A user wins once all cards have successfully been matched.
| Victory Popup | When a user wins the game, a custom Sweet Alert appears to congratulate the player and asks if they want to try again or learn about the developer. 
| Loss Popup | When a user loses the game, a custom Sweet Alert appears to further the storyline set out from the splash screen and also asks if they want to play again or learn about the developer. 
| Timer | When the player starts a game, a timer of 30 seconds should also begin. Once the player wins the game, the timer stops.
| Double click | Users can double click a card to return its original position.

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to be pulled in by the theme of the website/game.
        2. As a First Time Visitor, I want to play the game as intended for it to function.
        3. As a First Time Visitor, I want to learn more about the developer.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to see if the game is fun being replayed.
        2. As a Returning Visitor, I want to find the best way to find out more about the developer.
        

    -   #### Frequent User Goals
        1. As a Frequent User, I want to check to see if there are any newly added challenges or updates.
        2. As a Frequent User, I want to check to see if there are any new features.
        3. As a Frequent User, I want always to have fun playing the game; replayability is crucial.

-   ### Design
    -   #### Colour Scheme
        The two main colours represent the main character's (Naruto) colour scheme: orange and black.
    -   #### Typography
        -   The Acme font is the main font used throughout the whole website, with Sans Serif as the fallback font. Acme is a stylistic font used to achieve a vintage flash game look, so it is both attractive and appropriate.
    -   #### Imagery
        -   Imagery is vital. The large background hero image is designed to be a striking centrepiece as if the user is in the midst of the battle. It also has a minimalist colour scheme that does not clash with the Orange/Black palette.

*   ### Wireframes

    -  Wireframe - [View](https://user-images.githubusercontent.com/41737293/115411820-b91cf000-a1eb-11eb-8c64-47ec6c2f3150.png)

   
## Features

-   Responsive on all device sizes

-   Interactive elements

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used


1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Titillium Web' font into the style.css file, which is used on all pages throughout the project.
1. [jQuery:](https://jquery.com/)
    - jQuery was used for the card game logic.
1. [SweetAlert2](https://sweetalert2.github.io/)
    -  SweetAlert2 was used to create the Victory and Loss alerts.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the project's code after being pushed from Git.
1. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to edit the background hero image.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://user-images.githubusercontent.com/41737293/115411820-b91cf000-a1eb-11eb-8c64-47ec6c2f3150.png) during the design process.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://user-images.githubusercontent.com/41737293/115413470-1bc2bb80-a1ed-11eb-961f-a024e333d2c4.PNG)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://user-images.githubusercontent.com/41737293/115413571-31d07c00-a1ed-11eb-8a3c-d53d654d40d8.PNG)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to be pulled in by the theme of the website/game.

        1. Upon entering the site, users are automatically greeted with a clean and easily readable Splash screen, which introduces the plot and premise for the game. There is a Hero Image used in the background, which displays the enemy opponent(Itachi).
        2. There is a brief tutorial text which tells the user how to play; not much detail is needed as the game is intuitive enough to pick up without instructions.
        3. The splash screen has an appropriate timeout feature which gave me enough time to read the content and tutorial.
        
          - Screenshot  [View](https://user-images.githubusercontent.com/41737293/115718602-2c9d3980-a373-11eb-9bb3-32d5bd027e2d.JPG)

    2. As a First Time Visitor, I want to play the game as intended for it to function.

        1. Each component of the website is straightforward and structured, separated by a splash screen, the main game and finally, a victory or loss alert.
        2. The timeout features are functional, the cards flips are fluid, and the timer works correctly.

          - Screenshot  [View](https://user-images.githubusercontent.com/41737293/115718905-7d149700-a373-11eb-8f1b-294b13ca5ae6.JPG)

    3. There is an option to "Play again" when winning and "Try again" when losing; GIFs are also used to emphasise the win/loss.
          - Screenshot  [View](https://user-images.githubusercontent.com/41737293/115719038-9f0e1980-a373-11eb-95d2-2fdb8d038d1c.JPG)

    3. As a First Time Visitor, I want to learn more about the developer.

        1. Once the new visitor has won the game or lost the game; there is a link to the developer's portfolio.
        2. Developer links are not as crucial and should not take away from experience; therefore, they are presented once the game session has ended.

          - Screenshot  [View](https://user-images.githubusercontent.com/41737293/115719349-e8f6ff80-a373-11eb-8918-b25f59a16c7d.JPG)
   

-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to see if the game is fun being replayed.

        1. The cards are randomised, so each experience is different.
        2. The use of a 30-second timer makes the game fast and exhilarating, which allows for replayability.
        3. A suggestion is made at the end of the game to give more reasons for the player to challenge themself.

          - Screenshot  [View](https://user-images.githubusercontent.com/41737293/115719716-468b4c00-a374-11eb-8bb5-55e415c44ef4.JPG)

    2. As a Returning Visitor, I want to find the best way to find out more about the developer.

        1. A link to the developer's portfolio is readily available whether the game is won or lost.
        2. The portfolio gives a base introduction and provides information on the developer's skillset and links to all socials.

          - Screenshot  [View](https://user-images.githubusercontent.com/41737293/115719947-7cc8cb80-a374-11eb-9842-7ca831a43f6f.JPG)




-   #### Frequent User Goals

    1. As a Frequent User, I want to check to see if there are any newly added challenges or updates.

        1. The user can continue to play in a conventional way or without memorising.

    2. As a Frequent User, I want to check to see if there are any new features.

        1. The user would already be comfortable with the game but has access to the developer through the portfolio to see if they make any more updates or features.

    3. As a Frequent User, I want always to have fun playing the game; replayability is crucial.

        1. The memory game is fluid and works well, with a small timer which makes the game difficult if you aren't familiar with the images used as they are not simplified symbols.
        2. There is an option to play the matching game without memorising the cards, making the game more intense and harder to win.
    

### Further Testing

-   The live project has been tested  on a variety of devices such as Desktop and Samsung Note 10 +
-   A large amount of testing was done to ensure that the game is functional
-   Friends and family members were requested to review the site and documentation to point out any bugs or user experience issues, and all were content with the gaming experience.

### Known Bugs

-   On some mobile devices, the title image does not fit correctly, and the cards are cut off if the screen size is too small.
    -   If the screen is too small, the "click to start" is pushed into the title image
-   On Microsoft Edge and Internet Explorer Browsers and some phones, the .gif/.webp format does not display correctly.
    - Unable to get HTML5 Audio or iframe working correctly on mobile devices, only works after the game is restarted using the Try again/Play again alert.

### GitHub Pages

The project was deployed to GitHub Pages using the following steps.

1. Log in to GitHub and locate the relevant Repository.
2. At the top of the Repository (not top of page), find the "Settings" button on the menu.
3. Scroll down the Settings menu until you find the Pages tab. Click on Pages
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Click on the Github Pages tab, which should provide a link to the live project.

### Forking the GitHub Repository

By forking the GitHub Repository, we make a copy of the original Repository on our GitHub account to view or make changes without affecting the original Repository by using the following steps.

1. Log in to GitHub and locate the relevant Repository.
2. At the top of the Repository (not top of page), just above the "Settings" button on the menu, locate the "Fork" button.
3. You should now have a copy of the original Repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the relevant Repository.
2. Under the repository name, click "Clone or download".
3. To clone the Repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

## Credits

### Code

-   [SweetAlert2](https://sweetalert2.github.io/): SweetAlert2 used to create beautiful and responsive alerts.

### Content

-   All text content was written by the developer.

-   All materials on this Site(Naruto), including, but not limited to characters, images, illustrations, audio clips, video clips, and compilations, are protected by copyrights, trademarks, and other intellectual property rights which are owned and controlled by VIZ Media, LLC. and its affiliates (collectively, "VIZ Media, SHONEN JUMP, Shojo Beat")


### Media

-   The Full-screen background image came from this [Wallpaperaccess](https://wallpaperaccess.com/uchiha-fan)
-   The Victory .webp came from this [Tenor](https://tenor.com/view/happy-naruto-smile-gif-12599252)
-   The Loss .webp came from this [Cute Wallpaper](https://cutewallpaper.org/21/wallpaper-mangekyou-sharingan-gif/Top-30-Sharingan-GIFs-Find-the-best-GIF-on-Gfycat.gif)
-   The Splash screen background image came from this [Wallpaper Abyss](https://wall.alphacoders.com/big.php?i=1093657)
-   The Card images came from [Pinterest](https://www.pinterest.co.uk/)
-   The Favicon icon came from [Icon Library](https://icon-library.com/icon/naruto-icon-13.html)

### Acknowledgements

-   Javascript logic inspired by OurCodeSolution (https://ourcodesolution.com/)

-   My Mentor for continuous helpful feedback.

-   Tutor support at Code Institute for their support.
