import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card, Header } from 'components/common'
import { Wrapper, Grid, Item, Content, Stats, Lang, GithubSvg, Icons } from './styles'
import * as jsondata from 'data/myinfo.json';
import * as data from 'data/config';
import githubIcon from 'assets/icons/github.svg';
import openIcon from 'assets/icons/open_in_browser-24px.svg';



const Name = (props) => {

  const projectName = props.name;
  // console.log("this is projectName: ");
  // console.log(projectName);
  // console.log(typeof projectName);
  const languagesUsed= data[projectName] || ["HTML", "CSS", "Bootstrap"] ;
  // console.log("this is languagesUsed: ");
  // console.log(languagesUsed);
  // console.log(typeof languagesUsed);

  return (
      <Lang>

      {languagesUsed.map((item, i) => (
            <li key={i}>{item}{" "}</li>
          )) }

      </Lang>
  );
};


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
              first: 6
              orderBy: { field: PUSHED_AT, direction: DESC }
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
     <Header>Projects</Header>
      <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.id}
            as="div"
          >
            <Card>
              <Content>
                <div>
                <Icons>

                { node.homepageUrl ? <a href={node.homepageUrl}
                  target="_blank" rel="noopener noreferrer"> 
                    <img src={openIcon} alt="Open Icon"  />
                  </a> : <a href=""></a>  }

                  <a href={node.url}
                  target="_blank" rel="noopener noreferrer" >  
                    <img src={githubIcon} alt="GitHub Icon"  /> 
                  </a>   

                </Icons>

                   <h4>{node.name}</h4>
                <p>{node.description}</p>
                
                </div>
               <div><Name name={node.name} /></div>
                
               
                {/* <p>  <a 
                href={"https://api.github.com/repos/kkote/"+node.name}
                 target="_blank"
                 rel="noopener noreferrer"
                > Api
                </a></p> */}
                
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
