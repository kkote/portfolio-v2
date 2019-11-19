import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'components/common'
import starIcon from 'assets/icons/star.svg'
import forkIcon from 'assets/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'
import * as jsondata from 'data/myinfo.json';



const Name = () => {
  const json = jsondata.map(o => <li>{o.name}</li>);

  return (
    <div>
      <ul>{json}</ul>
    </div>

  );
};



const ProjectName = (props) => (

<div>
<h5>The Project Name is</h5>
<p>{props.name}</p>


  </div>

);





export const Projects = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 8
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  homepageUrl
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  )


  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.id}
            as="div"
          >
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
                <a 
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
                > Github
                </a>
                <a 
                href={node.homepageUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                > Demo
                </a>
                <p>  <a 
                href={"https://api.github.com/repos/kkote/"+node.name}
                 target="_blank"
                 rel="noopener noreferrer"
                > Api
                </a></p>

                <ProjectName name={node.name} />
                <Name name={node.name} />
              
              </Content>
             {/* <Stats>
                <div>
                  <img src={starIcon} alt="stars" />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <img src={forkIcon} alt="forks" />
                  <span>{node.forkCount}</span>
                </div>
              </Stats> */}
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
