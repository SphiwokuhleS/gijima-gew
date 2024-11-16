export default class BidModel {
    constructor({
                    id,
                    job_id,
                    title,
                    body,
                    created_at,
                    price,
                }) {
        this.id = id;
        this.job_id = job_id;
        this.title = title;
        this.body = body;
        this.created_at = created_at;
        this.price = price;
    }
}
