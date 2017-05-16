var getRainbowFact = document.getElementById("rainbowFact");
            getRainbowFact.addEventListener("click", displayRainbowFact);

            var getCloudFact = document.getElementById("cloudFact");
            getCloudFact.addEventListener("click", displayCloudFact)

            var getRainFact = document.getElementById("rainFact");
            getRainFact.addEventListener("click", displayRainFact)

            function displayRainbowFact() {
                document.getElementById("displayFact").innerHTML = "“Rainbow” comes from the Latin arcus pluvius, meaning “rainy arch.”";
            }

            function displayCloudFact() {
                document.getElementById("displayFact").innerHTML = "Clouds can contain millions of tons of water.";
            }

            function displayRainFact() {
                document.getElementById("displayFact").innerHTML = "The maximum speed of a falling raindrop can differ from 18 to 22 miles per hour.";
            }