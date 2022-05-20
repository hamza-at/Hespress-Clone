/*import elasticsearch from "elasticsearch";

const connectionString = 'localhost:9200';
const _index = 'wiki2_de_2017_09_09';
const _type = 'article';

let handler=(props)=> {
    let client = new elasticsearch.Client({
        host: connectionString,
        log: "trace"
    });
    client.search({
        index: _index,
        type: _type,
        q: props.search_query,
        body: {
            query: {
                multi_match: {
                    query: props.search_query,
                    fields: ['title^100', 'tags^100', 'abstract^20', 'description^10', 'chapter^5', 'title2^10', 'description2^10'],
                    fuzziness: 1,
                },
            },
        },
    }).then(
        function (body) {
            this.setState({results: body.hits.hits});
        }.bind(this),
        function (error) {
            console.trace(error.message);
        }
    );
}
export default handler;*/