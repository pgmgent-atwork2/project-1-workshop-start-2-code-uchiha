const wordList = [];
let correctAnswers = 0;

document.getElementById('start-btn').addEventListener('click', startStory);

function startStory() {
    alert("Welkom bij CodeQuest! Je wordt meegenomen op een spannend avontuur waarin je uitdagingen moet oplossen door te coderen.");

    const intro = "Je bevindt je in een magische wereld genaamd CodeLand. De enige manier om deze wereld te verkennen is door de geheime codes van CodeMaster te leren. Laten we beginnen!";
    alert(intro);

    presentChallenge("CodeMaster heeft een toverdrank nodig om je krachten te versterken. Schrijf een stukje code om 'Brouw toverdrank' op het scherm te laten zien.", "Brouw toverdrank");
}

function presentChallenge(challenge, word) {
    const userCode = prompt(challenge + "\n\nSchrijf je antwoord hier:");

    const expectedAnswer = "alert('" + word + "');";
    if (userCode && normalizeCode(userCode) === normalizeCode(expectedAnswer)) {
        alert("Gefeliciteerd! Je hebt de uitdaging voltooid.");
        wordList.push(word);
        correctAnswers++;
    } else {
        alert("Helaas, dat is niet de juiste code. Probeer het opnieuw.");
    }

    if (correctAnswers < 7) {
        switch(correctAnswers) {
            case 1:
                presentChallenge("Wat is het mysterieuze geschenk dat groeit in de stille ruimtes van je geest, kracht vindt in de fluisteringen van oude toverboeken en zich verspreidt als de wortels van een eeuwenoude boom in de rijken van de magie? Schrijf een stukje code om 'leer' op het scherm te laten zien.", "leer");
                break;
            case 2:
                presentChallenge("Wanneer bereikt een toverspreuk zijn volledige potentieel, en manifesteert zich de onzichtbare kracht van de ether in het heden van alle dimensies? Schrijf een stukje code om 'nu' op het scherm te laten zien.", "nu");
                break;
            case 3:
                presentChallenge("Wanneer wordt de langverwachte samensmelting van de elementen voltooid, en de sluier tussen de werelden doorbroken, waardoor de tijdloze magie eindelijk haar ware glorie onthult? Schrijf een stukje code om 'eindelijk' op het scherm te laten zien.", "eindelijk");
                break;
            case 4:
                presentChallenge("Wanneer zal de oude profetie vervuld worden en zal de magische harmonie zich herstellen, waar alle wezens van het rijk van de mystiek zich ooit samen zullen voegen in een glorieuze eenheid, eens en voor altijd? Schrijf een stukje code om 'eens' op het scherm te laten zien.", "eens");
                break;
            case 5:
                presentChallenge("Hoe zou je de toestand van de betoverde landen beschrijven wanneer de krachten van licht en duisternis in perfecte balans zijn, en de magische energieën stromen in harmonie, waardoor het rijk wordt overspoeld door een sfeer van goedheid en welwillendheid? Schrijf een stukje code om 'goed' op het scherm te laten zien.", "goed");
                break;
            case 6:
                presentChallenge("Wat is de mystieke kunst die de woorden van de oude toverboeken omzet in betoverende reeksen van symbolen en commando's, waarmee de macht van de digitale sferen wordt ontsloten en de weefsel van realiteit wordt gevormd naar de wil van de tovenaar? Schrijf een stukje code om 'coderen' op het scherm te laten zien.", "coderen");
                break;
        }
        
    } else {
        const sentence = wordList.join(" ");
        alert("Gefeliciteerd! Je hebt alle uitdagingen voltooid. Met de woorden die je hebt verzameld, kun je nu leren coderen. De zin die je hebt gevormd is: '" + sentence + "'.");
    }
}

function normalizeCode(code) {
    return code.replace(/\s+/g, "").toLowerCase();
}


