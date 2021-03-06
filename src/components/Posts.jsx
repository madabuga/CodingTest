import React from 'react';
import { Query } from 'react-apollo';
import BarGraph from './BarGraph';
import gql from 'graphql-tag';

function Posts() {
    return (
        <Query query={gql`{
                allPosts(count: 300) {
                  createdAt
                }
            }`}>

            {({ loading, error, data }) => {
                if (loading) return <p>Loading ...</p>
                if (error) return <p>Error</p>

                let numberOfPosts = [
                    {
                        month: "January",
                        numbers: 0
                    },
                    {
                        month: "February",
                        numbers: 0
                    },
                    {
                        month: "March",
                        numbers: 0
                    },
                    {
                        month: "April",
                        numbers: 0
                    },
                    {
                        month: "May",
                        numbers: 0
                    },
                    {
                        month: "June",
                        numbers: 0
                    },
                    {
                        month: "July",
                        numbers: 0
                    },
                    {
                        month: "August",
                        numbers: 0
                    },
                    {
                        month: "September",
                        numbers: 0
                    },
                    {
                        month: "October",
                        numbers: 0
                    },
                    {
                        month: "November",
                        numbers: 0
                    },
                    {
                        month: "December",
                        numbers: 0
                    }
                ]

                data.allPosts.forEach((el) => (new Date(Number(el.createdAt)).getFullYear() === 2019 &&
                    (numberOfPosts[new Date(Number(el.createdAt)).getMonth()].numbers = numberOfPosts[new Date(Number(el.createdAt)).getMonth()].numbers + 1)))

                return <div>
                    <h2 style={{ margin: 40 }}>Histogram of the number of posts created in each month of 2019</h2>
                    <BarGraph numberOfPosts={numberOfPosts} />
                </div>

            }}
        </Query>
    )

}

export default Posts;