globalThis.sweet = {
    async warn(title, text) {
        // show a warning dialog, will throw error if dismissed by user
        const res = await Swal.fire({
            title: title,
            text: text,
            icon: "warning",
            scrollbarPadding: false
        });
        if (!res.isConfirmed) throw 'Sweet Confirm Dismissed! Stop Execution';
        return res.isConfirmed;
    },
    async ask(title, text, preset = "", inputType = "text") {
        // show a dialog asking the user for a input, will throw error if dismissed by user
        const res = await Swal.fire({
            title: title,
            text: text,
            input: inputType,
            icon: "question",
            inputValue: preset,
            inputValidator: (x) => (!!x ? null : "Enter Something!"),
            scrollbarPadding: false
        });
        if (!('value' in res)) throw 'Sweet Input Dismissed! Stop Execution';
        return res.value;
    },
    error(title, text) {
        // show a dialog with error info
        Swal.fire({
            title: title,
            text: text,
            icon: "error",
            scrollbarPadding: false
        });
    },
    cheer(title, text) {
        // show a dialog with success info
        Swal.fire({
            title: title,
            text: text,
            icon: "success",
            scrollbarPadding: false
        });
    },
    toast(title, text, icon = "success") {
        // show a toast notification
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            toast: true,
            position: 'bottom',
            timer: 4000,
            timerProgressBar: true,
            showConfirmButton: false,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
            scrollbarPadding: false
        });
    },
    show(title, text, show) {
        // show a dialog with a textarea, allow user to copy the content
        Swal.fire({
            title: title,
            text: text,
            html: '<textarea id="swal-input2" style="height:auto!important" class="swal2-input" rows="15">' + show + '</textarea>',
            width: "60%",
            icon: "info",
            scrollbarPadding: false
        });
    }
};


