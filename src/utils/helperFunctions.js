export const UserRoles = {
    role: "role"
};

export const UserRolesName = {
    "role": "Role"
};

export const Themes = {
    default: "default",
    dark: "dark",
};

export const AlertProps = {
    vertical: {
        top: "top",
        bottom: "bottom",
    },
    horizontal: {
        left: "left",
        right: "right",
        center: "center",
    },
    severity: {
        success: "success",
        error: "error",
        warning: "warning",
        info: "info",
    },
};

export const DrawerProps = {
    direction: {
        top: "top",
        bottom: "bottom",
        left: "left",
        right: "right",
    },
    variant: {
        permanent: "permanent",
        persistent: "persistent",
        temporary: "temporary",
    },
};

export const LocalStorageKeys = {
    authToken: "auth_token",
};

export const NetWorkCallMethods = {
    get: "GET",
    post: "POST",
    put: "PUT",
    delete: "DELETE",
    update: "UPDATE",
};

export const ConvertToReactSelect = (data, valueKey, labelKey) => {
    if (!data || !data?.length) {
        return [];
    }

    return data.map((val) => {
        return {
            ...val,
            value: val[valueKey],
            label: val[labelKey],
        };
    });
};

export const ToBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export const CapitalizeString = (string) => {
    if (!string) {
        return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const ConvertHexToRGBA = (hex, opacity) => {
    if (hex) {
        const tempHex = hex.replace("#", "");
        const r = parseInt(tempHex.substring(0, 2), 16);
        const g = parseInt(tempHex.substring(2, 4), 16);
        const b = parseInt(tempHex.substring(4, 6), 16);

        return `rgba(${r},${g},${b},${opacity / 100})`;
    }
    return null;
};

export const OpenFullScreen = (id) => {
    let elem = document.getElementById(id);
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
};

export const CloseFullScreen = (id) => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
};

export const TimeCustomConverter = (incomingDate) => {
    let date = new Date(incomingDate);
    let hours = date.getHours() % 12 === 0 ? 12 : date.getHours() % 12;
    let minutes = date.getMinutes() % 12;

    let AmOrPm = date.getHours() >= 12 ? "Pm" : "Am";

    return (
        ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + " " + AmOrPm
    );
};

export const FormatString = (exceptionData) => {
    let dayString = exceptionData.days.join(', ')
    let index = dayString.lastIndexOf(",")
    let replaceChar = " &"
    let firstPart = dayString.substr(0, index);
    let lastPart = dayString.substr(index + 1);
    return firstPart + replaceChar + lastPart;
}

export const BmiCalculation = (height = 1, weight = 1) => {
    weight = parseFloat(weight);
    height = parseFloat(height);
    let bmi = Math.round((weight / Math.pow(height, 2)) * 10000);
    return bmi;
};

export const ScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}