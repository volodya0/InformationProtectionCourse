const encodeButton = document.getElementById("EncodeButton");
const messageInput = document.getElementById("MessageInput");
const stepInput = document.getElementById("StepInput");
const encodeResultField = document.getElementById("EncodeResult");

encodeButton.addEventListener("click", onEncodeClick);

function onEncodeClick() {
    const message = messageInput.value;
    const step = stepInput.value;

    const result = EncodeCaesar(message, step);

    encodeResultField.innerText = result;
}

const alphabetUkr = " АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ";

function EncodeCaesar(message, step, _isDecoding = false) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
        const originalLetter = message[i];
        const originalLetterIndex = alphabetUkr.indexOf(
            originalLetter.toUpperCase()
        );

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
