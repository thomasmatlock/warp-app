exports.renderItem = (nav_A_active) => {
    const markup = `
    <li>
    <a href="#" class="dl__item test_add_item_0">
        <figure class="dl__item__thumbnail">
            <img src="img/youtube-thumbnail.jpg" alt="Test" />
        </figure>
        <div class="dl__item__data">
            <h4 class="dl__item__data__property-title dl__item__data__property-title-title">One Breath Around The World</h4>
            <p class="dl__item__data__property-title dl__item__data__property-file-length">0:45:18</p>
            <p class="dl__item__data__property-title dl__item__data__property-file-size">297.4 MB</p>
            <p class="dl__item__data__property-title dl__item__data__property-file-format">MP4</p>
            <p class="dl__item__data__property-title dl__item__data__property-file-res">1080p</p>
        </div>
    </a>
</li>
    `;

    if (nav_A_active.includes('0')) {
        elements.download__list_audio.insertAdjacentHTML('beforeend', markup);
    } else if (nav_A_active.includes('1')) {
        elements.download__list_1.insertAdjacentHTML('beforeend', markup);
    } else if (nav_A_active.includes('2')) {
        elements.download__list_2.insertAdjacentHTML('beforeend', markup);
    } else if (nav_A_active.includes('3')) {
        elements.download__list_3.insertAdjacentHTML('beforeend', markup);
    }
};

exports.deleteItem = () => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};