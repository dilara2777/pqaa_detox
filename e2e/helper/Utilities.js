class Utilities {
    async sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    async typeInElement(mobileEl, text) {
        await mobileEl.replaceText(text);
        await mobileEl.tapReturnKey()
    };

    async scrollToElement(targetEl, background, pixels, direction) {
        if (direction === 'left' || direction === 'right') {
            await this.scrollHorizontallyToElement(element(background), direction, targetEl)
        } else {
            await waitFor(targetEl).toBeVisible().whileElement(background).scroll(pixels, direction);
        }
    }

    async scrollHorizontallyToElement(background, direction, targetEl) {
        while (await this.softElAssertion(targetEl) === false) {
            const scrollDirection = direction === 'left' ? 'right' : 'left';
            await background.swipe(scrollDirection, 'slow', 0.5);
        }
    }

    async selectCalendarDate(weekday, day, month, year) {
        while (await this.softTextAssertion(element(by.id('HEADER_MONTH_NAME')),
            `${month} ${year}`) === false) {
            await element(by.id('native.calendar.CHANGE_MONTH_RIGHT_ARROW')).tap();
        }
        await element(by.label(` ${weekday} ${day} ${month} ${year} `)).atIndex(0).tap();

    }

    async softElAssertion(mobileEl) {
        try {
            await expect(mobileEl).toBeVisible();
            return true;
        } catch {
            return false;
        }
    }

    async softTextAssertion(mobileEl, text) {
        try {
            await expect(mobileEl).toHaveText(text);
            return true;
        } catch {
            return false;
        }
    }
}

export default new Utilities();
