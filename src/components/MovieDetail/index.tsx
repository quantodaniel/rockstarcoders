import { useMemo } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { usePosterImage } from "../../api";
import Rating from "../Rating";

const MovieDetail = () => {
  const history = useHistory();
  const { state } = useLocation<IMovieData>();
  const { id } = useParams<MovieDetailParams>();

  const posterImage = usePosterImage(state.poster_path, "w185");

  const closeModal = () => {
    history.goBack();
  };

  const style = useMemo(() => {
    return { display: !!id ? "block" : "none" };
  }, [id]);

  return (
    <>
      <div className="modal fade show" aria-hidden="true" style={style}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{state.original_title}</h5>
              <button
                type="button"
                className="btn"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-4 text-center">
                  <img
                    className="img-thumbnail"
                    src={posterImage}
                    alt={state.original_title}
                  />
                </div>
                <div className="col-8 pe-5">
                  <h3>{state.original_title}</h3>
                  <Rating voteAverage={state.vote_average} />
                  <p className="fs-5 mt-3">{state.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" style={style}></div>
    </>
  );
};

export default MovieDetail;
