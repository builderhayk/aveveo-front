export function seo(data = {}) {
    data.title = data.title || 'Aveveo';
    data.metaDescription = data.metaDescription || 'Home';

    document.title = data.title;
    document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription);
}
