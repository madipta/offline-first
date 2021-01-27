import styled from 'styled-components';

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-family: sans-serif;
  height: 100vh;
  max-width: 768px;
  margin: 0 auto;

  header {
    display: flex;
    background-color: #1b9aaa;
    width: 100%;
    padding: .875rem;

    h1 {
      font-size: 1.275rem;
      font-weight: 600;
      color: white;
    }
  }

  main {
    flex:1;
    background-color: #f7f7f7;
    width: 100%;
    padding: .875rem; 
    overflow-y: auto;

    .main-body {
      width: 100%;

      .main-row {
        display: flex;
        align-items: center;
        width: 100%;
        padding-bottom: .6rem;
        margin-bottom: .6rem;
        border-style: solid;
        border-width: 0;
        border-color: #e7e7e7;
        border-bottom-width: 1px;

        .listNo {
          margin-left: .3rem;
        }
  
        .listName {
          flex: 1;
          padding-left: 1rem;
          padding-right: 1rem;
          margin: 0 1rem;

          h3 {
            font-size: 1rem;
            margin-bottom: 4px;
          }

          p {
            color: #6e6e6e;
            font-size: .75rem;
          }
        }

        .listTotal {
          font-size: .9rem;
          color: #383838;
        }
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #DDDBCd;
    border-style: solid;
    border-color: #eaeaea;
    border-width: 0px;
    border-top-width: 1px;

    .summary {
      display: flex;
      background-color: #F5F1E3;
      width: 100%;
      padding: .5rem 1.2rem;

      .title {
        flex: 1;
        color: #888;
        font-size: .9rem;
        text-align: right;
        margin-right: .5rem;
      }

      .sum {
        color: #373737;
        font-size: .9rem;
      }
    }

    .nav {
      display: flex;
      justify-content: center;
      list-style-type: none;
      margin: .15rem 0 .25rem;

      > li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        place-items: center;
        cursor: pointer;
        color: #1b9aaa;
        font-size: .7rem;
        width: 2rem;
        margin: 0 1.05rem;

        .add-icon {
          width: 2rem;
          height: 2rem;
          margin-bottom: .2rem;
        }

        .icon {
          width: 1.3rem;
          height: 2rem;
          margin-bottom: .2rem;
        }
      }
    }
  }
`;