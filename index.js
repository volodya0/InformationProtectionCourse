const alphabetUkr = " АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ";

const caesarDefaultValue =
    "При використанні моноалфавітної заміни окремі букви відкритого тексту заміняються іншими буквами або числами або якимись іншими символами.";
const caesarEncodeButton = document.querySelector(".Caesar #EncodeButton");
const caesarMessageInput = document.querySelector(".Caesar #MessageInput");
const caesarStepInput = document.querySelector(".Caesar #StepInput");
const caesarEncodeResultField = document.querySelector(".Caesar #EncodeResult");

caesarEncodeButton.addEventListener("click", onCaesarEncodeClick);
caesarMessageInput.innerHTML = caesarDefaultValue;

function onCaesarEncodeClick() {
    const message = caesarMessageInput.value;
    const step = caesarStepInput.value;

    const result = EncodeCaesar(message, step);

    caesarEncodeResultField.innerText = result;
}

function EncodeCaesar(message, step, _isDecoding = false) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
        const originalLetter = message[i].toUpperCase();
        const originalLetterIndex = alphabetUkr.indexOf(originalLetter);

        if (originalLetterIndex === -1) {
            result += originalLetter;
        } else {
            const encodedLetterIndex =
                (originalLetterIndex + parseInt(step)) % alphabetUkr.length;
            const encodedLetter = alphabetUkr[encodedLetterIndex];
            result += encodedLetter;
        }
    }

    return result;
}

const permutationalDefaultValue =
    "При використанні перестановочного шифру повідомлення записуєтся в горизонтальні рядки однакової довжини й наступне зчитування тексту стовпець за стовпцем, але не один по одному, а відповідно до деякої перестановки стовпців";
const permutationalEncodeButton = document.querySelector(
    ".Permutational #EncodeButton"
);
const permutationalMessageInput = document.querySelector(
    ".Permutational #MessageInput"
);
const permutationalKeyInput = document.querySelector(
    ".Permutational #StepInput"
);
const permutationalEncodeResultField = document.querySelector(
    ".Permutational #EncodeResult"
);

permutationalEncodeButton.addEventListener("click", onPermutationalEncodeClick);
permutationalMessageInput.innerHTML = permutationalDefaultValue;

function onPermutationalEncodeClick() {
    const message = permutationalMessageInput.value;
    const key = permutationalKeyInput.value;

    const result = EncodePermutational(message, key);

    permutationalEncodeResultField.innerText = result;
}

function EncodePermutational(message, key, _isDecoding = false) {
    const keyLength = key.length;
    const columns = new Array(keyLength).fill(0).map((a) => []);

    for (let i = 0; i < message.length; i++) {
        const letter = message[i];
        const columnIndex = i % keyLength;
        columns[columnIndex].push(letter);
    }

    return columns
        .reduce((res, arr) => (res += arr.join("")), "")
        .replace(/ /g, "")
        .toUpperCase();
}
