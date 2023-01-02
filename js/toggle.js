let isDarkMode= window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(isDarkMode){
            console.log('Currently in dark mode');
            ToggleDarkMode();
        }
        else{
            console.log('Currently not in dark mode');
        }
function ToggleDarkMode() {
        var element = document.body;
        element.classList.toggle("dark");
        }
