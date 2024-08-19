function fnEncryptStr(str, options) {
    return str.replace(/[aeiou]/g, function(match) {
        return options[match] || match;
    });
}

function fnDecryptStr(str, options) {
    for (const [group, replace] of Object.entries(options)) {
        const newStr = new RegExp(group, 'g');
        str = str.replace(newStr, replace);
    }
    return str;
}

function fnEncrypt() {
    let textAreaElement = document.getElementById("textArea");
    let textArea = textAreaElement.value;
    let encryptedText = document.getElementById("encryptedText");
    let contentTextDiv = document.getElementById("content__text__div");

    if (textArea.trim() === "") {
        encryptedText.style.display = "none";
        contentTextDiv.style.display = "block";
    } else {
        let options = {'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'};
        let encrypt = fnEncryptStr(textArea, options);

        encryptedText.textContent = encrypt;
        encryptedText.style.display = "block";
        contentTextDiv.style.display = "none";

        textAreaElement.value = "";
    }
}


function fnDecrypt() {
    let textAreaElement = document.getElementById("textArea");
    let textArea = textAreaElement.value;
    let encryptedText = document.getElementById("encryptedText");
    let contentTextDiv = document.getElementById("content__text__div");

    if (textArea.trim() === "") {
        encryptedText.style.display = "none";
        contentTextDiv.style.display = "block";
    } else {
        let options = {'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u'};
        let encrypt = fnDecryptStr(textArea, options);

        encryptedText.textContent = encrypt;
        encryptedText.style.display = "block";
        contentTextDiv.style.display = "none";

        textAreaElement.value = "";
    }
}