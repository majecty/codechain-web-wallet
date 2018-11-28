import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MetadataFormat } from "codechain-indexer-types/lib/utils";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { NetworkId } from "../../../model/address";
import { ImageLoader } from "../../../utils/ImageLoader/ImageLoader";
import "./AssetItem.css";

interface OwnProps {
    assetType: string;
    quantities: number;
    metadata: MetadataFormat;
    networkId: NetworkId;
    address: string;
}

type Props = RouteComponentProps & OwnProps;

class AssetItem extends React.Component<Props, any> {
    public constructor(props: Props) {
        super(props);
    }
    public render() {
        const { metadata, assetType, quantities, networkId } = this.props;
        return (
            <div onClick={this.handleClick} className="Asset-item">
                <div className="d-flex align-items-center">
                    <div className="image-container">
                        <ImageLoader
                            data={assetType}
                            size={65}
                            isAssetImage={true}
                            networkId={networkId}
                        />
                    </div>
                    <div className="name-container d-flex align-items-center">
                        <h4 className="mb-0 asset-name">
                            {metadata.name ||
                                `...${assetType.slice(
                                    assetType.length - 8,
                                    assetType.length
                                )}`}
                        </h4>
                    </div>
                    <span className="mb-0 number asset-quantities">
                        {quantities.toLocaleString()}
                    </span>
                    <FontAwesomeIcon className="info-icon" icon="info-circle" />
                </div>
            </div>
        );
    }

    private handleClick = () => {
        const { assetType, address } = this.props;
        this.props.history.push(`/${address}/${assetType}`);
    };
}
export default withRouter(AssetItem);
