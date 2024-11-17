export default class ListedJobModel {
    constructor({
                    id,
                    user_id,
                    customer_id,
                    date,
                    title,
                    body,
                    status,
                    price,
                    created_at,
                    bid,
                    bids,
                }) {
        this.id = id;
        this.user_id = user_id;
        this.customer_id = customer_id;
        this.date = date;
        this.title = title;
        this.body = body;
        this.status = status;
        this.price = price;
        this.created_at = created_at;
        this.bid = bid;
        this.bids = bids;
    }
}
